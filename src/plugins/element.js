import ElementPlus from "element-plus";
import { ElMain } from "element-plus";
import "../element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";
export default (app) => {
  // @ts-ignore
  app.use(ElementPlus, { locale });
  // @ts-ignore
  app.use(ElMain);
};
//# sourceMappingURL=element.js.map
