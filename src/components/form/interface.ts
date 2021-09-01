export interface FormProps {
  prop: string
  label: string
  labelWidth?: string | number
  required?: boolean
  rules?: any | any[]
  error?: string
  slot?: boolean
  type: ETypeItem | string
  options?: OptionsItem[]
  placeholder?: string
  disabled?: boolean
  onChange?: void
  method?: Methods
}
interface OptionsItem {
  label: string
  value: string
}

export interface Methods {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange?: Function
}

export enum ETypeItem {
  text = "text",
  input = "input",
  select = "select",
  datetime = "datetime",
}
