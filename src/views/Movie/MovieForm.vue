<template>
  <div id="movieForm">
    <span class="title">新增</span>
    <myForm
      :config="formConfig"
      v-model:formData="data"
      @submit="callbackData"
    />
    <div class="submit-btn">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button type="danger" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyForm from '/@/components/form/Form.vue'
import { reactive, ref } from "vue"
import { useStore } from "vuex"
import {
  RouteLocationNormalized,
  Router,
  useRoute,
  useRouter,
} from "vue-router"
import { DataItem } from "/@/interface"
import { formConfig } from "./Movie"

const store = useStore()
const router: Router = useRouter()
const route: RouteLocationNormalized = useRoute()
const form = ref(null)

const data: DataItem = reactive({
  movieName: "222",
  type: "action",
})

const handleSubmit = () => {
  console.log(data)
}
const handleCancel = () => {
  router.push("/movie")
}
const callbackData = (data: any) => {
  console.log(data)
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/Movie.scss";
</style>
