import { IRouterItem, IMetaItem } from "./interface"
import "vue-router"
declare module "vue-router" {
  interface RouteMeta {
    title: string
    hidden?: boolean
    icon?: string
    roles?: string[]
    search?: boolean
  }
}
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
    component: () => import("/@/views/Movie/Movie.vue"),
  },
  {
    path: "/movieForm",
    name: "movieForm",
    meta: {
      title: "电影表单",
      search: false,
      hidden: true,
    },
    component: () => import("/@/views/Movie/MovieForm.vue"),
  },
  {
    path: "/anchorForm",
    name: "anchorForm",
    meta: {
      title: "主播表单",
      search: false,
      hidden: true,
    },
    component: () => import("/@/views/Anchor/AnchorForm.vue"),
  },
]

export default routers
