import { reactive, ref } from "vue"
import { PaginationProp } from "/@/interface"

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

export { columns, pagination }
