<template>
  <el-dialog
    ref="dialog"
    :title="title"
    :value="visible"
    :width="width"
    destroy-on-close
  >
    <slot name="dialogContent"></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "Modal",
  emits: ["beforeClose", "submit"],
  props: {
    title: {
      type: String,
      required: false,
      default: "暂无",
    },
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    width: {
      type: String,
      required: false,
      default: "30%",
    },
  },
  setup(prop, { emit }) {
    const methods = {
      handleClose() {},
    }
    return {
      ...methods,
    }
  },
})
</script>
<style lang="scss" scoped>
@import "src/assets/style/Dialog.scss";
</style>
