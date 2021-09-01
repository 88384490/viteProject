<template>
  <el-form ref="elForm" :model="formData" hide-required-asterisk>
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
        v-model="item.prop"
        :placeholder="item.placeholder"
        :disabled="item.disabled"
        @change="item.method?.onChange"
      ></el-input>
      <el-select
        v-if="item.type === 'select'"
        v-model="item.prop"
        :disabled="item.disabled"
        @change="item.method?.onChange"
      >
        <el-options
          v-for="it in item.options"
          :key="it.value"
          :label="it.label"
          :value="it.value"
        ></el-options>
      </el-select>
      <el-date-picker
        v-if="item.type === 'datetime'"
        v-model="item.prop"
        type="datetime"
        placeholder="选择日期时间"
        :disabled="item.disabled"
        @change="item.method?.onChange()"
      >
      </el-date-picker>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs } from "vue"
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
      type: Array as PropType<Array<FormProps>>,
      required: true,
    },
    size: {
      type: String,
    },
  },
  setup(props) {
    const elForm = ref(null)
    const { config, formData } = toRefs(props)

    onMounted(() => {
      console.log(config.value)
      console.log(formData.value)
    })

    const methods = {
      resetField: (): void => {
        ;(elForm.value as any).resetField()
      },
      clearValidate: (): void => {
        ;(elForm.value as any).clearValidate()
      },
    }
    return {
      elForm,
    }
  },
})
</script>

<style lang="scss" scoped></style>
