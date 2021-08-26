<template>
  <el-container :style="{ height: height + 'px' }" direction="vertical">
    <el-header>
      <Header />
    </el-header>
    <el-container class="container" direction="horizontal">
      <el-aside class="shadow mr-10" width="200px">
        <AsideItem></AsideItem>
      </el-aside>
      <el-main class="shadow">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import AsideItem from "@/components/aside/AsideItem.vue";
import { onMounted } from "vue";
const height =
  (document.querySelector("#app") as HTMLElement).clientHeight - 20;
</script>

<style lang="scss" scoped>
.el-header,
.el-container,
.el-aside,
.el-main {
  box-sizing: border-box;
}
.el-main {
  padding: 0;
}
header.el-header {
  padding: 0;
}
</style>
