import { IRouterItem } from "./interface";

const routers: Partial<IRouterItem>[] = [
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
    path: "/anchor",
    name: "Anchor",
    meta: {
      title: "主播列表",
      icon: "el-icon-user-solid",
      roles: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
    },
    component: () => import("../views/Anchor.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
      roles: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
    },
    component: () => import("../views/User.vue"),
  },
];

export default routers;
