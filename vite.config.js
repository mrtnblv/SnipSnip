import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"login":{"outputDir":"./login","lang":"en","title":"SnipSnip - Log in","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Log in"},{"itemprop":"name","content":"SnipSnip - Log in"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Log in"},{"property":"og:title","content":"SnipSnip - Log in"},{"property":"og:site_name","content":"Snipsnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/login/"}]},"fr/login":{"outputDir":"./fr/login","lang":"fr","title":"Snipsnip - Connexion","cacheVersion":128,"meta":[{"name":"title","content":"Snipsnip - Connexion"},{"itemprop":"name","content":"Snipsnip - Connexion"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Snipsnip - Connexion"},{"property":"og:title","content":"Snipsnip - Connexion"},{"property":"og:site_name","content":"SnipSnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/login/"}]},"index":{"outputDir":"./","lang":"en","title":"Snipsnip","cacheVersion":128,"meta":[{"name":"title","content":"Snipsnip"},{"itemprop":"name","content":"Snipsnip"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Snipsnip"},{"property":"og:title","content":"Snipsnip"},{"property":"og:site_name","content":"Snipsnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/"}]},"fr/":{"outputDir":"./fr/","lang":"fr","title":"SnipSnip","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip"},{"itemprop":"name","content":"SnipSnip"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip"},{"property":"og:title","content":"SnipSnip"},{"property":"og:site_name","content":"SnipSnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/"}]},"sign-up":{"outputDir":"./sign-up","lang":"en","title":"SnipSnip - Sign up","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Sign up"},{"itemprop":"name","content":"SnipSnip - Sign up"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Sign up"},{"property":"og:title","content":"SnipSnip - Sign up"},{"property":"og:site_name","content":"Snipsnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/sign-up/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/sign-up/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/sign-up/"}]},"fr/sign-up":{"outputDir":"./fr/sign-up","lang":"fr","title":"SnipSnip - Inscription","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Inscription"},{"itemprop":"name","content":"SnipSnip - Inscription"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Inscription"},{"property":"og:title","content":"SnipSnip - Inscription"},{"property":"og:site_name","content":"SnipSnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/sign-up/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/sign-up/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/sign-up/"}]},"reset-password":{"outputDir":"./reset-password","lang":"en","title":"SnipSnip - Reset your password","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Reset your password"},{"itemprop":"name","content":"SnipSnip - Reset your password"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Reset your password"},{"property":"og:title","content":"SnipSnip - Reset your password"},{"property":"og:site_name","content":"Snipsnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/reset-password/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/reset-password/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/reset-password/"}]},"fr/reset-password":{"outputDir":"./fr/reset-password","lang":"fr","title":"SnipSnip - Réinitialisation mot de passe","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Réinitialisation mot de passe"},{"itemprop":"name","content":"SnipSnip - Réinitialisation mot de passe"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Réinitialisation mot de passe"},{"property":"og:title","content":"SnipSnip - Réinitialisation mot de passe"},{"property":"og:site_name","content":"SnipSnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/reset-password/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/reset-password/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/reset-password/"}]},"forgot-password":{"outputDir":"./forgot-password","lang":"en","title":"SnipSnip - Fortgot Password","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Fortgot Password"},{"itemprop":"name","content":"SnipSnip - Fortgot Password"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Fortgot Password"},{"property":"og:title","content":"SnipSnip - Fortgot Password"},{"property":"og:site_name","content":"Snipsnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/forgot-password/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/forgot-password/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/forgot-password/"}]},"fr/forgot-password":{"outputDir":"./fr/forgot-password","lang":"fr","title":"SnipSnip - Mot de passe oublié","cacheVersion":128,"meta":[{"name":"title","content":"SnipSnip - Mot de passe oublié"},{"itemprop":"name","content":"SnipSnip - Mot de passe oublié"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"SnipSnip - Mot de passe oublié"},{"property":"og:title","content":"SnipSnip - Mot de passe oublié"},{"property":"og:site_name","content":"SnipSnip"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\n    html {\n        background-color: #000;\n    }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/forgot-password/"},{"rel":"alternate","hreflang":"en","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/forgot-password/"},{"rel":"alternate","hreflang":"fr","href":"https://4cd64839-004c-4eb2-9be5-8f9fbe8de302.weweb-preview.io/fr/forgot-password/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
