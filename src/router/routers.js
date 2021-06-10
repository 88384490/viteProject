const routers = [
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
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
    },
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/tab",
    name: "Tab",
    meta: {
      title: "Tab选项",
    },
    component: () => import("../views/Tab.vue"),
  },
];
export default routers;
//# sourceMappingURL=routers.js.map
