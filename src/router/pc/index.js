// web端路由配置
const pcRoute = [
    {
        path: "index", // pc端首页
        name: "index",
        title:"首页",
        component: () =>
            import("@/views/pc_vue/index/index.vue"),
    }
]
export default pcRoute