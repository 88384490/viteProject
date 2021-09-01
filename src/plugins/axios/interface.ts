import { AxiosResponse } from "axios"
export interface ResponseInNode<T> extends AxiosResponse {
  data: {
    data: T
    msg: string
  }
}
