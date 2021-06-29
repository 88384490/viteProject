import ElementPlus, {
  ElAside,
  ElButton,
  ElButtonGroup,
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
  ElTable,
  ElTableColumn,
} from "element-plus";
import "../element-variables.scss";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";
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
  ElIcon,
  ElPagination,
  ElLink,
  ElForm,
  ElFormItem,
];
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];
export default (app: any) => {
  elements.forEach((element) => {
    app.component(element.name, element);
  });
  plugins.forEach((plugin: any) => {
    app.use(plugin);
  });
};