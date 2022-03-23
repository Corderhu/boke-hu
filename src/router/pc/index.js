// web端路由配置
const pcRoute = [
  {
    path: "index", // pc端首页
    name: "index",
    title: "首页",
    component: () => import("@/views/pc_vue/index/index.vue"),
  },
  {
    path: "themeSetting", // pc端首页
    name: "themeSetting",
    title: "主题设置",
    component: () => import("@/views/pc_vue/theme/theme.vue"),
  },
]
export default pcRoute
