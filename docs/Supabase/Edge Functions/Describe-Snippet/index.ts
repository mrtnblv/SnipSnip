import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
const allowedExact = [
  "https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io",
  "https://editor.weweb.io",
  "https://app.snipsnip.tools"
];
function isAllowedOrigin(origin) {
  // Exact match
  if (allowedExact.includes(origin)) return true;
  // *.snipsnip.pages.dev
  if (origin.endsWith(".snipsnip.pages.dev")) return true;
  return false;
}
serve(async (req)=>{
  const origin = req.headers.get("Origin") || "";
  const isAllowed = isAllowedOrigin(origin);
  const corsHeaders = {
    "Content-Type": "application/json",
    ...isAllowed ? {
      "Access-Control-Allow-Origin": origin
    } : {},
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  let body;
  try {
    body = await req.json();
  } catch (_) {
    return new Response(JSON.stringify({
      error: "Invalid or missing JSON body"
    }), {
      status: 400,
      headers: corsHeaders
    });
  }
  const code = body?.code;
  const userLang = body?.language?.trim()?.toLowerCase();
  if (!code || typeof code !== "string") {
    return new Response(JSON.stringify({
      error: "Missing 'code' field"
    }), {
      status: 400,
      headers: corsHeaders
    });
  }
  const openaiKey = Deno.env.get("OPENAI_KEY");
  if (!openaiKey) {
    return new Response(JSON.stringify({
      error: "Missing OpenAI API key"
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
  const translateNote = userLang && userLang !== "english" ? `Please respond in **${userLang}**.` : ""; // leave empty for English (default)
  const prompt = `Here is a code snippet:

\`\`\`
${code}
\`\`\`

Please analyze this code and return a **JSON object** with the following fields:

- \`title\`: a short and relevant title for this code snippet **Short**
- \`description\`: a concise description (1–2 sentences) **Avoid starting with "This code", "A code snippet", or similar. Just describe the action.**
- \`language\`: the programming language name in the exact format used by **highlight.js** (e.g. "javascript", "python", "cpp")
- \`tags\`: 2 to 5 relevant keywords (e.g. "Sorting", "Recursion", "API"), **one word only and capitalized. DO NOT include the programming language name found**

Respond with **only** the JSON object. No explanation or extra text.
${translateNote}`;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-5-nano",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: {
        type: "json_object"
      },
      reasoning_effort: "minimal"
    })
  });
  const data = await response.json();
  try {
    const raw = data.choices?.[0]?.message?.content?.trim();
    const json = JSON.parse(raw);
    return new Response(JSON.stringify(json), {
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: "Invalid JSON response from OpenAI",
      raw: data
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
});
