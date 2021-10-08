import { createStore, StoreOptions, MutationTree, GetterTree } from "vuex"
import { EMutationFun, GettersItem, StoreItem } from "./interface"
const store: StoreOptions<StoreItem> = {
  state: {
    showProgress: false,
    movieData: {
      movieName: "",
      type: "",
      level: "",
      year: "",
      runtime: "",
      userNumber: "",
      userRating: "",
      principalCast: "",
    },
  },
  getters: {
    showProgress(state) {
      return state.showProgress
    },
    movieData(state) {
      return state.movieData
    },
  } as GetterTree<StoreItem, any>,
  mutations: {
    [EMutationFun.HANDLE_SHOW_PROGRESS](state: StoreItem, params) {
      state.showProgress = params
    },
    [EMutationFun.CLEAR_MOVIE_DATA](state: StoreItem, params) {
      Object.keys(state.movieData).forEach((key) => {
        Object.assign(state.movieData, { [key]: "" })
      })
    },
  } as MutationTree<StoreItem>,
}

export default createStore(store)
