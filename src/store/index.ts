import {
  createStore,
  StoreOptions,
  MutationTree,
  GetterTree,
  ActionTree,
} from "vuex"
import { EActionFun, EMutationFun, StoreItem } from "./interface"
import { createMovies, getMovies, getUser } from "/@/api"
import { MovieForm } from "/@/interface"

const store: StoreOptions<StoreItem> = {
  state: {
    showProgress: false,
    movieList: [],
    movieData: {
      movieName: "",
      movieType: "",
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
  actions: {
    [EActionFun.QUERY_ANCHOR](
      { state, commit, dispatch }: Context,
      params: string | number
    ) {
      console.log(params)
      // query()
    },
    async [EActionFun.QUERY_MOVIE]({ state, commit, dispatch }: Context) {
      const data = await getMovies()
      console.log("data", data)
      return data
    },
    async [EActionFun.QUERY_USER](
      { state, commit, dispatch }: Context,
      params: any
    ) {
      const data = await getUser()
    },
    async [EActionFun.ADD_MOVIE]({ commit }: Context, params: MovieForm) {
      const data = await createMovies(params)
    },
  } as unknown as ActionTree<StoreItem, StoreItem>,
}

export default createStore(store)
