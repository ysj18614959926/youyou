import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: () => import("@/views/home.vue")
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home.vue")
    },
    {
        path: '/kpan',
        name: 'KPan',
        component: () => import("@/views/kPan.vue")
    },
    {
        path: '/overview',
        name: 'OverView',
        component: () => import("@/views/overView.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;