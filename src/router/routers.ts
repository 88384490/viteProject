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
    path: "/table",
    name: "Table",
    meta: {
      title: "数据表格",
      icon: "el-icon-s-order",
    },
    component: () => import("../views/Table.vue"),
  },
];

export default routers;
