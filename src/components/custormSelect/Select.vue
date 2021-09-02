<template>
  <el-select v-model="modelValue" @change="onChange">
    <el-option
      v-for="item in options"
      :value="item.value"
      :key="item.value"
      :label="item.label"
    />
  </el-select>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { OptionsItem } from "/@/components/form/interface"

export default defineComponent({
  name: "Select",
  emits: ["change"],
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    options: {
      type: Array as PropTypes<Array<OptionsItem>>,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    return {
      onChange(value) {
        emit("onChange", value)
      },
    }
  },
})
</script>

<style lang="less" scoped></style>
