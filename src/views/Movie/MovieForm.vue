<template>
  <div id="movieForm">
    <span class="title">新增</span>
    <myForm :config="config" v-model:formData="data"></myForm>
    <CustomSelect v-model:modelValue="data.movieName" :options="options" />
    <div class="submit-btn">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button type="danger" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyForm from "/@/components/form/Form.vue"
import CustomSelect from "/@/components/CustormSelect/Select.vue"
import { ETypeItem, FormProps, OptionsItem } from "/@/components/form/interface"
import { onMounted, reactive, ref } from "vue"
import { useStore } from "vuex"
import {
  RouteLocationNormalized,
  Router,
  useRoute,
  useRouter,
} from "vue-router"

const store = useStore()
const router: Router = useRouter()
const route: RouteLocationNormalized = useRoute()
const form = ref(null)

const config: FormProps[] = reactive([
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
    ],
  },
])
interface DataItem {
  movieName: string
  type: string
}
const data: DataItem = reactive({
  movieName: "222",
  type: "action",
})
const options: OptionsItem = [
  {
    value: 1,
    label: "属性1",
  },
]
onMounted(() => {
  console.log(route.query)
})

const handleSubmit = () => {
  console.log(data)
}
const handleCancel = () => {
  router.push("/movie")
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/Movie.scss";
</style>
