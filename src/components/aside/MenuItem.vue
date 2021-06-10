<template>
  <el-menu-item :index="path" :disabled="disabled">
    <template #title>
      <i v-if="icon" :class="icon" />
      <span>{{ menuName }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    menuName: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const {
      menuName = "",
      path = "",
      icon = "",
      disabled = false,
    }: unknown | any = toRefs(props);

    return {
      menuName,
      path,
      icon,
      disabled,
    };
  },
});
</script>

<style lang="less" scoped></style>
