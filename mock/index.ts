interface IReq {
  body: any
  headers: any
}

interface apiItem {
  url: string
  method: string
  timeout: number
  response: void
}
const responseData = (code: number, msg: string, data: any) => {
  return {
    Code: code,
    Msg: msg,
    Data: data,
  }
}
const api = [
  {
    url: "api/movie/getData",
    method: "post",
    timeout: 4000,
    response: (req: IReq) => {},
  },
]
export default api
