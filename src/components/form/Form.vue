<template>
  <el-form ref="elForm" :model="formData" hide-required-asterisk>
    <el-form-item></el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineComponent, ref, toRefs } from "vue"
import { FormProps } from "/@/components/form/interface"
export default defineComponent({
  name: "MyForm",
  emits: ["validate"],
  props: {
    formData: {
      type: Array,
      required: true,
    },
    config: {
      type: Object as FormProps,
      required: true,
    },
    size: {
      type: String,
    },
  },
  setup(props) {
    const elForm = ref(null)
    const { fromData, config, size } = toRefs(props)

    const propItem = { fromData, config, size }

    const methods = {
      resetField: (): void => {
        ;(elForm.value as any).resetField()
      },
      clearValidate: (): void => {
        ;(elForm.value as any).clearValidate()
      },
    }
    return {
      ...propItem,
      elForm,
    }
  },
})
</script>

<style lang="scss" scoped></style>
