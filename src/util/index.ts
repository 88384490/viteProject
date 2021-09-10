import day from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import cn from "dayjs/locale/zh"
day.locale(cn)
day.extend(customParseFormat)

function formatDate(time: any, format: string) {
  return day(time).format(format)
}

function formatUnix(time: any) {
  return day(time).valueOf()
}

export { formatDate, formatUnix }
