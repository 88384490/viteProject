<template>
  <el-container class="main" direction="vertical">
    <el-header>
      <Header />
    </el-header>
    <el-container direction="horizontal">
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
import Header from "/@/components/header/index.vue";
import AsideItem from "/@/components/aside/AsideItem.vue";
import { onMounted, onUpdated } from "vue";
let height = (document.querySelector("#app") as HTMLElement).clientHeight - 20;
onUpdated(function() {
  height = (document.querySelector("#app") as HTMLElement).clientHeight - 20;
});
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
.main {
  height: 100%;
}
//.container {
//  overflow-y: auto;
//}
header.el-header {
  padding: 0;
}
</style>
