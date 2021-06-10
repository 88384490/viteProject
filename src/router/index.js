import { createRouter, createWebHistory } from "vue-router";
import children from "./routers";
const routes = [
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
//# sourceMappingURL=index.js.map
