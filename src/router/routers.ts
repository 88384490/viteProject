import { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      hidden: true,
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/:catchAll(.*)",
    meta: {
      title: "404",
      hidden: true,
    },
    component: () => import("../components/NotFound.vue"),
  },
];

export default routers;
