<template>
  <myForm :config="config" :formData="data"></myForm>
</template>

<script setup lang="ts">
import MyForm from "/@/components/form/Form.vue"
import { ETypeItem, FormProps } from "/@/components/form/interface"
import { onMounted, reactive } from "vue"

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

const data = reactive([])

onMounted(() => {
  console.log(MyForm)
})
</script>

<style lang="less" scoped></style>
