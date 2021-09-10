export interface Props {
  formData: any[]
  config: FormProps[]
  formLabelWidth?: string | number
  size?: string
}

interface InputProps {
  append?: string
}

interface DatePickerProps {
  method?: any | Methods
  dateFormat?: string
}

interface SelectProps {
  options?: OptionsItem[]
  onChange?: void
}

export interface FormProps extends InputProps, DatePickerProps, SelectProps {
  prop: string
  label: string
  labelWidth?: string | number
  required?: boolean
  rules?: any | any[]
  error?: string
  slot?: boolean
  type: ETypeItem | string
  placeholder?: string
  disabled?: boolean
}
export interface OptionsItem {
  label: string
  value: string | number
}

export interface Methods {
  onChange?: any
  onInput?: any
}

export enum ETypeItem {
  text = "text",
  input = "input",
  select = "select",
  datetime = "datetime",
  date = "date",
  slot = "slot",
}
