export interface MovieTableColumns {
  id?: string
  movieName: string
  type: string
  level: string
  year: string
  runtime: number
  userRating: number
  userNumber: number
  principalCsat: string
}

export interface MovieForm {
  movieName: string
  movieType: string
  level: string
  year: string | number
  runtime: string
  userRating: string
  userNumber: string
  principalCast: string
}
