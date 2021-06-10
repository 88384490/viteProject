import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import children from "./routers";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children: children,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
