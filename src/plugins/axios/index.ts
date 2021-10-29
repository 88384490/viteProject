import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { ResponseInNode } from "./interface"

import * as Cookies from "js-cookie"

class HttpRequest {
  private baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  getInsideConfig(): AxiosRequestConfig {
    const ctoken = Cookies.get("ctoken") || ""
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "x-csrf-token": ctoken,
      },
      timeout: 6000,
      timeoutErrorMessage: "请求超时",
    }
    return config
  }

  interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (error: Error) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        return res
      },
      (error: any) => {
        let errorInfo = error.response
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config,
          } = JSON.parse(JSON.stringify(error))
          errorInfo = {
            statusText,
            status,
            request: {
              responseURL: config.url,
            },
          }
        }
        const { status } = errorInfo
        if (status && status === 401) {
          ;(window as any).EventHub.$emit("login")
        }
        return Promise.reject(error)
      }
    )
  }

  request(options: AxiosRequestConfig): Promise<ResponseInNode<any>> {
    const instance: AxiosInstance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest
