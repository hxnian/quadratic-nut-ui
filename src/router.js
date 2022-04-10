import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './views/Index.vue';
const pagesRouter = [];
const modulesPage = import.meta.glob('/src/packages/**/doc.md');
for (const path in modulesPage) {
    let name = /packages\/(.*)\/doc.md/.exec(path)[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesPage[path],
        name
    });
}
const modulesPageTaro = import.meta.glob('/src/packages/**/*.taro.md');
for (const path in modulesPageTaro) {
    let name = /packages\/(.*)\/doc.taro.md/.exec(path)[1];
    pagesRouter.push({
        path: `/${name}-taro`,
        component: modulesPageTaro[path],
        name: `${name}-taro`
    });
}
const routes = [
    {
        path: '/',
        name: '/',
        component: Index,
        children: pagesRouter
    }
];
routes.push({
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
        name: '/'
    }
});
console.log('pagesRouter', routes);
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const id = to.hash.split('#')[1];
            const ele = document.getElementById(id);
            setTimeout(() => {
                ele && ele.scrollIntoView(true);
            });
        }
    }
});
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
export default router;
