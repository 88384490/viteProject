export interface FormProps {
  prop: string
  label: string
  labelWidth?: string | number
  required?: boolean
  rules?: any | []
  error?: string
  slot?: boolean
}
