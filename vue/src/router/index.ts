import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import layoutsRoutes from "./autoload/index";
import guard from "./guard"
import autoload from "./autoload/index";
import userStore from "@/store/userStore";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        //数组里面展开运算符[...[{},{}]]会转换为[{},{}]
        {
            path: '/',
            component: () => import('@/layouts/front.vue'),
            children: [
                {
                    name: 'article.index',
                    path: '',
                    component: () => import('@/views/article/index.vue')
                },
                {
                    name: 'article.show',
                    path: 'article/:id',
                    component: () => import('@/views/article/show.vue')
                },
                {
                    name: 'category.index',
                    path: 'category/:cid',
                    component: () => import('@/views/category/index.vue')
                },
                {
                    name: 'article.create',
                    path: 'article',
                    component: () => import('@/views/article/create.vue')
                },
                {
                    name: 'article.update',
                    path: 'article/:id',
                    component: () => import('@/views/article/update.vue')
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/auth/login.vue'),
            meta: { guest: true }
        },
        {
            path: '/:any(.*)',
            name: 'notFound',
            component: () => import('@/views/errors/404.vue'),
        },
        {
            path: '/article',
            name: 'article',
            component: () => import('@/views/article.vue'),
        },
    ]
})

export async function setup(app: App) {
    const user = userStore()
    await user.getUserInfo()
    autoload(router)
    guard(router)
    app.use(router)
}
export default router