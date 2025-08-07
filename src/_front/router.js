import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"4cd64839-004c-4eb2-9be5-8f9fbe8de302","homePageId":"1983de6b-396d-49da-94c7-561d93c6e381","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"dark","langs":[{"lang":"en","default":true,"isDefaultPath":false},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{"backgroundColor":"var(--c2233fb1-2f05-442f-93fd-5c78e8e0228d,#fefdfb)"},"workflows":[{"id":"88732b41-ee82-4239-96f7-fbe539410e4d","name":"On app load","actions":{"0656acbf-3ce0-4254-b20e-1ac3b6df94ac":{"id":"0656acbf-3ce0-4254-b20e-1ac3b6df94ac","name":"isMac?","next":"f1c67d56-4d11-4b33-9dd8-e0ae32a06850","type":"variable","varId":"046e33c7-aa2e-4a62-83a5-2f932204c431","internal":false,"varValue":{"code":"return navigator.platform.toUpperCase().includes('MAC');","__wwtype":"js"}},"f1c67d56-4d11-4b33-9dd8-e0ae32a06850":{"id":"f1c67d56-4d11-4b33-9dd8-e0ae32a06850","lang":{"code":"variables['393fc342-e985-41f8-a711-937d8e04349b']","__wwtype":"f"},"type":"change-lang"}},"trigger":"before-collection-fetch-app","firstAction":"0656acbf-3ce0-4254-b20e-1ac3b6df94ac","triggerConditions":null},{"id":"d711df25-a312-4bfc-9093-7cea9cbe19e9","actions":{"3db87006-15ba-47c5-858c-80eb5f05f004":{"id":"3db87006-15ba-47c5-858c-80eb5f05f004","type":"execute-workflow:ef1936cf-96e4-41c0-b17f-72ac7ebe41fa"}},"trigger":"on-collection-fetch-error","firstAction":"3db87006-15ba-47c5-858c-80eb5f05f004","triggerConditions":null}],"pages":[{"id":"1983de6b-396d-49da-94c7-561d93c6e381","linkId":"1983de6b-396d-49da-94c7-561d93c6e381","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"57cfd45a-80bf-42c6-8cce-819b0666c2b9","sectionTitle":"Notifications","linkId":"607e30e5-3c3c-401b-8d16-ec69fd9ddeb2"},{"uid":"3988ee20-053a-4f4c-88c7-717b94130a8b","sectionTitle":"Header","linkId":"f23fb998-b763-48df-bb7d-e2fa183c2ac1"},{"uid":"54c4db83-65fe-4715-8579-05392895c924","sectionTitle":"Snippets Container","linkId":"74b6beaf-d0db-4947-9815-826fb47ec71a"}],"pageUserGroups":[{}],"title":{"en":"Snipsnip","fr":"SnipSnip"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f345c4de-bbf1-4dfe-8da4-c4c0149189a5","linkId":"f345c4de-bbf1-4dfe-8da4-c4c0149189a5","name":"Sign up","folder":"Login/","paths":{"en":"sign-up","default":"sign-up"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"57cfd45a-80bf-42c6-8cce-819b0666c2b9","sectionTitle":"Notifications","linkId":"607e30e5-3c3c-401b-8d16-ec69fd9ddeb2"},{"uid":"bf76ff15-cd3e-4e3b-bd96-ec45b57c2ce6","sectionTitle":"Header","linkId":"89b537db-8610-4fbc-b64d-4aef743089b8"},{"uid":"ef3e94d8-4192-441f-8f19-bc9e297c52fd","sectionTitle":"Signup","linkId":"67093010-34ad-4110-95ab-deeeebc2905c"}],"pageUserGroups":[],"title":{"en":"SnipSnip - Sign up","fr":"SnipSnip - Inscription"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"806fa1f2-0c01-4d10-ba59-60221b6ea3b5","linkId":"806fa1f2-0c01-4d10-ba59-60221b6ea3b5","name":"Log in","folder":"Login/","paths":{"en":"login","default":"login"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"57cfd45a-80bf-42c6-8cce-819b0666c2b9","sectionTitle":"Notifications","linkId":"607e30e5-3c3c-401b-8d16-ec69fd9ddeb2"},{"uid":"bf76ff15-cd3e-4e3b-bd96-ec45b57c2ce6","sectionTitle":"Header","linkId":"89b537db-8610-4fbc-b64d-4aef743089b8"},{"uid":"7b4ddc9f-9a5e-4a0a-82ae-f5e9e306dc2b","sectionTitle":"Login","linkId":"f3b1cf06-0393-439a-8f3d-1a0fcb19be0c"}],"pageUserGroups":[],"title":{"en":"SnipSnip - Log in","fr":"Snipsnip - Connexion"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a9a0bbc7-9124-419e-95b0-5f99fa0bc78c","linkId":"a9a0bbc7-9124-419e-95b0-5f99fa0bc78c","name":"Reset Password","folder":"Login/","paths":{"en":"reset-password","default":"reset-password"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"57cfd45a-80bf-42c6-8cce-819b0666c2b9","sectionTitle":"Notifications","linkId":"607e30e5-3c3c-401b-8d16-ec69fd9ddeb2"},{"uid":"bf76ff15-cd3e-4e3b-bd96-ec45b57c2ce6","sectionTitle":"Header","linkId":"89b537db-8610-4fbc-b64d-4aef743089b8"},{"uid":"0c7d70b4-b035-46db-9d73-a28038a719d3","sectionTitle":"Signup","linkId":"e5881fa2-96e3-4d2c-ae35-f49958ad5ff3"}],"pageUserGroups":[],"title":{"en":"SnipSnip - Reset your password","fr":"SnipSnip - Réinitialisation mot de passe"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"101b70d5-d1a8-43a6-ab24-71129c6519a8","linkId":"101b70d5-d1a8-43a6-ab24-71129c6519a8","name":"Forgot Password","folder":"Login/","paths":{"en":"forgot-password","default":"forgot-password"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"57cfd45a-80bf-42c6-8cce-819b0666c2b9","sectionTitle":"Notifications","linkId":"607e30e5-3c3c-401b-8d16-ec69fd9ddeb2"},{"uid":"bf76ff15-cd3e-4e3b-bd96-ec45b57c2ce6","sectionTitle":"Header","linkId":"89b537db-8610-4fbc-b64d-4aef743089b8"},{"uid":"9c8b94ae-44e3-4e7b-9e1c-a27cfc3fa7d5","sectionTitle":"Signup","linkId":"ee348fe3-9b15-40a7-92df-9493943eca73"}],"pageUserGroups":[],"title":{"en":"SnipSnip - Fortgot Password","fr":"SnipSnip - Mot de passe oublié"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 117;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
