import { createStore, StoreOptions, MutationTree, GetterTree } from "vuex"
import { EMutationFun, GettersItem, StoreItem } from "./interface";
const store: StoreOptions<any> = {
  state: {
    showProgress: false,
  } as StoreItem,
  getters: {
    showProgress(state) {
      return state.showProgress
    },
  } as GetterTree<GettersItem, any>,
  mutations: {
    [EMutationFun.HANDLE_SHOW_PROGRESS](state: StoreItem, params) {
      state.showProgress = params
    },
  } as MutationTree<StoreItem>,
}

export default createStore(store)
