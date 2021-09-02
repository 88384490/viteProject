import { IRouterItem } from "./interface"

const routers: Partial<IRouterItem>[] = [
  {
    path: "",
    name: "Home",
    meta: {
      title: "首页",
      hidden: true,
      search: false,
    },
    component: () => import("/@/views/Home.vue"),
  },
  {
    path: "/anchor",
    name: "Anchor",
    meta: {
      title: "主播列表",
      icon: "el-icon-mic",
      roles: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
      search: true,
    },
    component: () => import("/@/views/Anchor/Anchor.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
      roles: ["ADMINISTRATOR", "USER_ADMINISTRATOR"],
      search: false,
    },
    component: () => import("/@/views/User.vue"),
  },
  {
    path: "/movie",
    name: "movie",
    meta: {
      title: "电影片源",
      icon: "el-icon-video-camera-solid",
      search: true,
    },
    component: () => import("/@/views/Movie/index.vue"),
  },
  {
    path: "/movieForm/:id",
    name: "form",
    meta: {
      title: "电影表单",
      search: false,
      hidden: true,
    },
    component: () => import("/@/views/Movie/MovieForm.vue"),
  },
]

export default routers
