export interface IMetaItem {
  title: string
  hidden?: boolean
  icon?: string
  roles?: string[]
  search: boolean
}

export interface IRouterItem {
  path: string
  name: string
  meta?: IMetaItem
  children?: IRouterItem[]
  component: any
  redirect?: string
}
