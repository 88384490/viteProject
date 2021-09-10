import { reactive, ref } from "vue"
import { AnchorForm, PaginationProp } from "/@/interface"
import { ETypeItem, FormProps } from "/@/components/form/interface"

const columns = ref([
  { label: "主播名", prop: "anchorName" },
  { label: "虎牙号", prop: "huya_Id" },
  {
    label: "最后开播时间",
    prop: "startTime",
  },
  { label: "粉丝数量", prop: "fanNumber" },
  { label: "状态", slot: true, name: "status" },
  {
    label: "操作",
    slot: true,
    name: "action",
    width: 200,
  },
])
const pagination: PaginationProp = reactive({
  size: 20,
  total: 100,
  currentPage: 5,
  layout: "prev, pager, next, sizes, jumper, ->,total",
})
const config: FormProps[] = [
  {
    prop: "anchorName",
    label: "主播名",
    type: ETypeItem.input,
  },
  {
    prop: "huya_Id",
    label: "虎牙号",
    type: ETypeItem.input,
  },
  {
    prop: "lastStartTime",
    label: "最后开播时间",
    type: ETypeItem.date,
  },
  {
    prop: "fanNumber",
    label: "粉丝数量",
    type: ETypeItem.input,
    disabled: true,
  },
  {
    prop: "chatNumber",
    label: "弹幕数量",
    type: ETypeItem.input,
    disabled: true,
  },
  {
    prop: "status",
    label: "状态",
    type: ETypeItem.select,
    options: [
      {
        value: "true",
        label: "启用",
      },
      { value: "false", label: "禁用" },
    ],
  },
]

const formData: AnchorForm = {
  anchorName: "",
  huya_Id: "",
  lastStartTime: Date.now(),
  fanNumber: "",
  chatNumber: "",
  status: "true",
}

function initData() {
  Object.keys(formData).forEach((key) => {
    if (key === "lastStartTime") {
      Object.assign(formData, { [key]: Date.now() })
    } else {
      Object.assign(formData, { [key]: "" })
    }
  })
}

export { columns, pagination, config, formData, initData }
