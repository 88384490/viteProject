export interface MovieTableColumns {
  id?: string
  movieName: string
  type: string
  year: string
  runtime: number
  userRating: number
  userNumber: number
  principalCsat: string
}

export interface DataItem {
  movieName: string
  type: string
}
