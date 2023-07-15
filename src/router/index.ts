import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue')
    },
    {
        path: '/:path(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router