import { createStore, StoreOptions, MutationTree, GetterTree } from "vuex"
import { GettersItem, StoreItem } from "./interface"
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
    handleShowProgress(state: StoreItem, params) {
      state.showProgress = params
    },
  } as MutationTree<StoreItem>,
}

export default createStore(store)
