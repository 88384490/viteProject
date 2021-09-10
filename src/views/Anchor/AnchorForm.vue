<template>
  <div id="anchorForm">
    <span class="title">新增</span>
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
import { reactive, onBeforeUnmount } from "vue"
import { config, formData, initData } from "./Anchor"
import { AnchorForm } from "/@/interface"

const data: AnchorForm = reactive<AnchorForm>(formData)
onBeforeUnmount(() => {
  initData()
})
const handleSubmit = () => {
  Object.keys(data).forEach((key) => {
    console.log(key, data[key])
  })
}
const handleCancel = () => {}
</script>

<style lang="scss" scoped>
#anchorForm {
  padding: 15px 20px;
  text-align: center;
  position: relative;
  height: 95%;
  .title {
    display: inline-block;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      margin-bottom: 20px;
    }
  }
  .form {
    width: 700px;
    margin: auto;
  }
  .submit-btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-53%);
    margin: auto;
    width: 200px;
    display: inline-flex;
    justify-content: space-between;
  }
}
</style>
