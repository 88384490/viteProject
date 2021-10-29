<template>
  <div id="movieForm">
    <span class="title">{{ title }}</span>
    <myForm
      class="form"
      :config="config"
      v-model:formData="data"
      ref="myForm"
    />
    {{ data }}
    <div class="submit-btn">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button type="danger" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyForm from "/@/components/form/Form.vue"
import { reactive, ref, onBeforeUnmount, onMounted } from "vue"
import {
  RouteLocationNormalized,
  Router,
  useRoute,
  useRouter,
} from "vue-router"
import { MovieForm } from "/@/interface"
import { FormProps } from "/@/components/form/interface"
import {
  formConfig,
  formData,
  originData,
  log,
  initData,
} from "/@/views/Movie/Movie"
import { Store, useStore } from "vuex"
import { EActionFun, StoreItem } from "/@/store/interface"

const store: Store<StoreItem> = useStore()
const router: Router = useRouter()
const route: RouteLocationNormalized = useRoute()
const myForm = ref(null)

const data: MovieForm = reactive({
  movieName: "魂断蓝桥",
  movieType: "action",
  year: Date.now(),
  runtime: "150",
  userNumber: "2",
  userRating: "2",
  principalCast: "章子怡",
  level: "a",
})
const config: FormProps[] = formConfig
const title = ref("")

onMounted(() => {
  if (route.query?.id) {
    title.value = "编辑"
  } else {
    title.value = "新增"
    Object.assign(data, formData)
    console.log("movie data", data, originData)
  }
})

onBeforeUnmount(() => {
  console.log("销毁")
})
const handleSubmit = (): boolean => {
  store.dispatch(EActionFun.ADD_MOVIE, data)
  return true
}
const handleCancel = (): boolean => {
  router.push("/movie")
  return true
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/Movie.scss";
</style>
