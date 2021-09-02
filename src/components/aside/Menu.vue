<template>
  <el-menu :router="true" :default-active="defaultPath" @select="handleSelect">
    <slot name="container" />
  </el-menu>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue"

export default defineComponent({
  name: "Menu",
  props: {
    defaultPath: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const { defaultPath = "/home" } = toRefs(props)
    const handleSelect = (path: string, pathArr: string) => {
      context.emit("selectedPath", path)
    }
    return { defaultPath, handleSelect }
  },
})
</script>
<style></style>
