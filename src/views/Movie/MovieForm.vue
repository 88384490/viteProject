<template>
  <div id="movieForm">
    <span class="title">新增</span>
    <myForm :config="config" v-model:formData="data" />
    <div class="submit-btn">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button type="danger" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { useStore } from "vuex"
import {
  RouteLocationNormalized,
  Router,
  useRoute,
  useRouter,
} from "vue-router"
import { DataItem } from "/@/interface"
import { FormProps, ETypeItem } from "/@/components/form/interface"

const store = useStore()
const router: Router = useRouter()
const route: RouteLocationNormalized = useRoute()
const form = ref(null)

const data: DataItem = reactive({
  movieName: "222",
  type: "action",
})

const config: FormProps[] = [
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
]

const handleSubmit = (): boolean => {
  console.log(data)
  return true
}
const handleCancel = (): boolean => {
  console.log(data)
  // router.push("/movie")
  return true
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/Movie.scss";
</style>
