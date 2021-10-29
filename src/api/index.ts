import request from "/@/util/axios"
import { AxiosResponse } from "axios"
import { MovieForm } from "/@/interface"
const query = (id: string | number): Promise<AxiosResponse<IResponse>> => {
  return request({
    url: `/anchor/${id}`,
    method: "get",
  })
}
const getMovies = (): Promise<AxiosResponse<IResponse>> => {
  return request({
    url: "/movie",
    method: "get",
  })
}

const getUser = (): Promise<AxiosResponse<IResponse>> => {
  return request({
    url: "/user",
    method: "get",
  })
}

const createMovies = (params: MovieForm): Promise<AxiosResponse<IResponse>> => {
  return request({
    url: "/movie/addMovie",
    method: "post",
    data: {
      ...params,
    },
  })
}

export { query, getMovies, getUser, createMovies }
