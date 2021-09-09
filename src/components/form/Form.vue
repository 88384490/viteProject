<template>
  <el-form
    ref="elForm"
    :label-width="formLabelWidth"
    :model="formData"
    hide-required-asterisk
  >
    <el-form-item
      v-for="item in config"
      :key="item.prop"
      :label="item.label"
      :label-width="item.labelWidth"
      :rules="item.rules"
    >
      <span v-if="item.type === 'text'">{{ formData[item.prop] }}</span>
      <el-input
        v-if="item.type === 'input'"
        v-model="formData[item.prop]"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        @change="item.method?.onChange"
      ></el-input>
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
        type="datetime"
        placeholder="请选择日期时间"
        :disabled="item.disabled"
        @change="(item.method as any)?.onChange()"
      />
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="item.prop"
        type="date"
        placeholder="请选择日期"
        :disabled="item.disabled"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs } from "vue"
import { FormProps } from "/@/components/form/interface"
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
    },
  },
  setup(props, { emit }) {
    const elForm = ref(null)
    const { config, formData, formLabelWidth } = toRefs(props)

    onMounted(() => {
      console.log(config.value)
      console.log(formData.value)
      console.log(formLabelWidth.value)
    })

    const methods = {
      resetField: (): void => {
        ;(elForm.value as any).resetField()
      },
      clearValidate: (): void => {
        ;(elForm.value as any).clearValidate()
      },
      submit: (): void => {
        emit("submit", formData)
      },
    }
    return {
      elForm,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "src/assets/style/Form.scss";
</style>
