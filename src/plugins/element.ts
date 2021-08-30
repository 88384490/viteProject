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
  ElRow,
  ElCol,
} from "element-plus";

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
  ElRow,
  ElCol,
];
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];
import "/@/element-variables.scss";
import "element-plus/dist/index.css";
import "dayjs/locale/zh-cn";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
export default (app: any) => {
  elements.forEach((element) => {
    app.component(element.name, element);
  });
  plugins.forEach((plugin: any) => {
    app.use(plugin);
  });
};
