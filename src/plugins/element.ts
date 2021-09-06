import ElementPlus, {
  ElAside,
  ElButton,
  ElButtonGroup,
  ElCard,
  ElContainer,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInfiniteScroll,
  ElInput,
  ElLink,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPagination,
  ElSelect,
  ElOption,
  ElSpace,
  ElTable,
  ElTableColumn,
  ElRow,
  ElCol,
  ElDialog,
  ElScrollbar,
} from "element-plus"

const elements = [
  ElAside,
  ElMain,
  ElFooter,
  ElHeader,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElTable,
  ElTableColumn,
  ElButton,
  ElButtonGroup,
  ElInput,
  ElSelect,
  ElOption,
  ElIcon,
  ElLink,
  ElForm,
  ElFormItem,
  ElSpace,
  ElCard,
  ElPagination,
  ElRow,
  ElCol,
  ElDialog,
  ElScrollbar,
]
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]
import "/@/element-variables.scss"
import "element-plus/dist/index.css"
import "dayjs/locale/zh-cn"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/display.css"
import "element-plus/theme-chalk/base.css"
export default (app: any) => {
  elements.forEach((element) => {
    app.component(element.name, element)
  })
  plugins.forEach((plugin: any) => {
    app.use(plugin)
  })
}
