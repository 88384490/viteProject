import { MovieForm } from "/@/interface"

export interface StoreItem {
  showProgress: boolean
  movieData: MovieForm
}
export interface GettersItem {
  showProgress: void
  movieData: void
}
export enum EMutationFun {
  HANDLE_SHOW_PROGRESS = "handleShowProgress",
  CLEAR_MOVIE_DATA = "clearMovieData",
}
export enum EActionFun {}
