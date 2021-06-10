<template>
  <el-menu :router="true" :default-active="defaultPath">
    <slot name="container" />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Menu",
  props: {
    defaultPath: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const { defaultPath = "/home" } = toRefs(props);
    const handleSelect = (index: string, indexPath: string) => {
      console.log(index, indexPath);
      router.push("/home");
    };
    return { defaultPath, handleSelect };
  },
});
</script>

<style lang="less" scoped></style>
