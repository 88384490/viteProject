import { IRouterItem } from "./interface";
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
  Router,
} from "vue-router";
import children from "./routers";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    meta: { title: "主页" },
    children: children as any,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { title: "错误页面", icon: "el-icon-not-eleme" },
    component: () => import("../components/error/NotFound.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    document.title = (to.meta as any).title;
  }
);

export default router;
