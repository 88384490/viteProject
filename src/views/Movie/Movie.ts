import { ref } from "vue"
import { ETypeItem, FormProps } from "/@/components/form/interface"
import { MovieForm } from "/@/interface"
import { formatDate } from "/@/util"
import { Store } from "vuex"
import { StoreItem } from "/@/store/interface"

const columns = ref([
  { label: "电影名称", prop: "movieName" },
  { label: "类型", prop: "type" },
  { label: "上映时间", prop: "year" },
  { label: "得分", prop: "userRating" },
  { label: "评分人数", prop: "userNumber" },
  { label: "主演", prop: "principalCsat" },
  { label: "操作", slot: true, name: "action", width: 200 },
])

const formConfig: FormProps[] = [
  {
    prop: "movieName",
    label: "电影名称",
    type: ETypeItem.input,
  },
  {
    prop: "type",
    label: "类型",
    type: ETypeItem.select,
    options: [
      {
        value: "action",
        label: "动作",
      },
      {
        value: "love",
        label: "爱情",
      },
    ],
  },
  {
    prop: "year",
    label: "上映时间",
    type: ETypeItem.date,
  },
  {
    prop: "runtime",
    label: "电影长度",
    type: ETypeItem.input,
    append: "分钟",
  },
  {
    prop: "userRating",
    label: "得分",
    type: ETypeItem.input,
    disabled: true,
  },
  {
    prop: "userNumber",
    label: "评分人数",
    type: ETypeItem.input,
    disabled: true,
  },
  {
    prop: "principalCsat",
    label: "主演",
    type: ETypeItem.input,
    disabled: true,
  },
]

const formData: MovieForm = {
  movieName: "",
  type: "",
  year: Date.now(),
  runtime: "",
  userNumber: "2",
  userRating: "2",
  principalCast: "章子怡",
}

const log = (store: Store<StoreItem>) => {
  console.log("formData", formData)
  console.log("time", formatDate(formData.year, "YYYY-MM-DD"))
  console.log(store.state.movieData)
}

const initData = () => {
  Object.keys(formData).forEach((key) => {
    if (key === "year") {
      Object.assign(formData, { [key]: null })
    } else {
      Object.assign(formData, { [key]: "" })
    }
  })
}
export { columns, formConfig, formData, log, initData }
