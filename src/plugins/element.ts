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
  ElSpace,
  ElTable,
  ElTableColumn,
} from "element-plus";
import "../element-variables.scss";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
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
  ElLink,
  ElForm,
  ElFormItem,
  ElSpace,
  ElCard,
  ElPagination,
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
