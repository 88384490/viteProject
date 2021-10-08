import request from "/@/util/axios"
import { AxiosResponse } from "axios"
const query = (id: string | number): Promise<AxiosResponse<IResponse>> => {
  return request({
    url: `/anchor/${id}`,
    method: "get",
  })
}

export { query }
