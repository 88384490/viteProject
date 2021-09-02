import { reactive, ref } from "vue"
import { ETypeItem, FormProps } from "/@/components/form/interface"

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
  // {
  //   prop: "type",
  //   label: "类型",
  //   type: ETypeItem.select,
  //   options: [
  //     {
  //       value: "action",
  //       label: "动作",
  //     },
  //   ],
  // },
]
export { columns, formConfig }
