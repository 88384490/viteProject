import { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "",
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
      roles: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
    },
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
      role: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
    },
    component: () => import("../views/User.vue"),
  },
];

export default routers;
