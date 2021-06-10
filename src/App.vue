<template>
  <transition name="el-fade">
    <router-view />
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
});
</script>
<style lang="scss">
@import "App.scss";
@import "Common.scss";
</style>
