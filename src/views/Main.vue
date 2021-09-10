<template>
  <el-progress
    v-if="showProgress"
    class="progress"
    :percentage="50"
    :indeterminate="true"
    :show-text="false"
  />
  <el-container class="main" direction="vertical">
    <el-header>
      <Header />
    </el-header>
    <el-container class="layout" direction="horizontal" :style="contentStyle">
      <el-aside class="shadow mr-10" width="200px">
        <AsideItem></AsideItem>
      </el-aside>
      <el-main class="shadow">
        <layoutContent />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { ElProgress } from "element-plus"
import Header from "/@/components/header/Header.vue"
import AsideItem from "/@/components/aside/AsideItem.vue"
import layoutContent from "/@/components/layout/Content.vue"
import { computed, onMounted, reactive, ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const showProgress = computed(() => store.getters.showProgress)
const contentStyle = reactive({ height: "0px" })
onMounted(() => {
  initElement()
  window.addEventListener("resize", initElement)
})
const initElement = () => {
  const main = document.getElementsByClassName("main")[0]
  const header = document.getElementsByClassName("el-header")[0]
  const contentHeight = main.clientHeight - header.clientHeight - 10
  Object.assign(contentStyle, {
    height: contentHeight + "px",
  })
}
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
  overflow: hidden;
}
.el-aside {
  height: 100%;
}
.main {
  height: 100%;
  .layout {
    min-width: 1280px;
  }
}
.container {
  overflow-y: auto;
}
header.el-header {
  padding: 0;
}
.progress {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
