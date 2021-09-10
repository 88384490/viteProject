<template>
  <el-form
    ref="elForm"
    :label-width="formLabelWidth"
    :model="formData"
    :size="size"
    hide-required-asterisk
  >
    <el-form-item
      v-for="item in config"
      :key="item.prop"
      :label="item.label"
      :label-width="item.labelWidth"
      :rules="item.rules"
    >
      <span
        class="text-span"
        v-if="item.type === 'text'"
        v-html="formData[item.prop]"
      />
      <el-input
        v-if="item.type === 'input'"
        v-model="formData[item.prop]"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        @change="item.method?.onChange"
      >
        <template v-if="item.append" #append>{{ item.append }}</template>
      </el-input>
      <el-select
        v-if="item.type === 'select'"
        v-model="formData[item.prop]"
        :disabled="item.disabled"
        @change="item.method?.onChange"
      >
        <el-option
          style="padding: 0 32px 0 20px"
          v-for="option in item['options']"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
      <el-date-picker
        v-if="item.type === 'datetime'"
        v-model="formData[item.prop]"
        :disabled="item.disabled"
        :style="datePickerStyle"
        :value-format="item.dateFormat"
        placeholder="请选择日期时间"
        type="datetime"
        @change="item.method.onChange()"
      />
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="formData[item.prop]"
        :disabled="item.disabled"
        :style="datePickerStyle"
        :value-format="item.dateFormat"
        placeholder="请选择日期"
        type="date"
      />
    </el-form-item>
    <slot />
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs, ToRefs } from "vue"
import { FormProps, Props } from "/@/components/form/interface"
export default defineComponent({
  name: "MyForm",
  emits: ["submit"],
  props: {
    formData: {
      type: Array as any,
      required: true,
    },
    config: {
      type: Array as PropType<Array<FormProps>>,
      required: true,
    },
    formLabelWidth: {
      type: [String, Number],
      required: false,
      default: 100,
    },
    size: {
      type: String,
      required: false,
      default: "small",
    },
  },
  setup(props, { emit }) {
    const elForm = ref(null)

    const methods = {
      resetField: (): void => {
        ;(elForm.value as any).resetField()
      },
      clearValidate: (): void => {
        ;(elForm.value as any).clearValidate()
      },
      submit: (): void => {
        emit("submit", props.formData)
      },
      validate: (): void => {
        let isValid
        ;(elForm.value as any).validate((valid: any) => {})
      },
    }
    return {
      elForm,
      ...methods,
      datePickerStyle: {
        width: "100%",
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import "src/assets/style/Form.scss";
</style>
