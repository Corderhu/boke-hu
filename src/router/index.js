import Vue from "vue"
import VueRouter from "vue-router"
import mRoute from './m/index'
import pcRoute from './pc/index'
Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/pc_index",
    },
    {
        path: "/pc_index", // pc端首页
        name: "PcIndex",
        component: () =>
            import ("@/views/pc_vue/pc_index.vue"),
    },
    {
        path: "/m_index", // 手机端首页
        name: "MIndex",
        component: () =>
            import ("@/views/m_vue/m_index.vue"),
    },
]
// web与移动端都放进去路由，可以实现互通
mRoute.forEach(element => {
    routes.push(element)
});
pcRoute.forEach(element => {
    routes.push(element)
});
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router