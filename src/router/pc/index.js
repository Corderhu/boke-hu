// web端路由配置
const pcRoute = [
    {
        path: "/pc_index/2", // pc端首页
        name: "2",
        component: () =>
            import("@/views/pc_vue/2.vue"),
    }
]
export default pcRoute