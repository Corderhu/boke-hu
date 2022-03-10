// 移动端路由配置
const mRoute = [
    {
        path: "/m_index/1", // 手机端首页
        name: "1",
        component: () =>
            import("@/views/m_vue/1.vue"),
    }
]
export default mRoute