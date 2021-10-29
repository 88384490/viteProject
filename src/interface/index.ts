import { ActionContext, Commit, Dispatch } from "vuex"
import { StoreItem } from "/@/store/interface"

export * from "./echart"
export * from "./pagination"
export * from "./modal"
export * from "./anchor"
export * from "./movie"
declare global {
  interface IResponse<T = any> {
    Code: number
    Msg: string
    Data: T
  }

  interface IObject<T> {
    [index: string]: T
  }

  interface ITable<T = any> {
    data: Array<T>
    total: number
    page: number
    size: number
  }

  interface ImportMetaEnv {
    VITE_APP_TITLE: string
    VITE_PORT: number
    VITE_PROXY: string
  }

  interface Context {
    dispatch: Dispatch
    commit: Commit
    state: StoreItem
  }
}
