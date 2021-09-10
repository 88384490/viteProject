export interface AnchorTableColumns {
  id?: string
  anchorName: string
  huya_Id: number
  lastStartTime: string
  fanNumber: number | null
  chatNumber: number | null
  status: boolean
  enabled: boolean
}

export interface AnchorForm {
  anchorName: string
  huya_Id: string
  lastStartTime: Date | number | null
  fanNumber: string
  chatNumber: string
  status: string
}
