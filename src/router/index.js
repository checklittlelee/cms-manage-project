import { createWebHashHistory, createRouter } from "vue-router"

import Layout from "@/layout/index.vue"

const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        meta: { title: "首页" }, // 路由元信息：用于存储与路由关联的自定义数据
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "activity",
        name: "activity",
        meta: { title: "活动管理", breadcrumb: false },
        component: () => import("@/pages/activity/index.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
