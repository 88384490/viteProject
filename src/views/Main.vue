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
    <el-container direction="horizontal">
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
import { computed, onMounted } from "vue"
import { useStore } from "vuex"

let height = (document.querySelector("#app") as HTMLElement).clientHeight - 20

const store = useStore()

const showProgress = computed(() => store.getters.showProgress)

onMounted(() => {
  window.addEventListener("resize", () => {
    height = (document.querySelector("#app") as HTMLElement).clientHeight - 20
  })
  console.log(showProgress.value)
})
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
