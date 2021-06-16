<template>
  <el-container style="height: 100%" direction="vertical">
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

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/header/index.vue";
import AsideItem from "@/components/aside/AsideItem.vue";

export default defineComponent({
  name: "Main",
  components: {
    Header,
    AsideItem,
  },
  setup() {
    const route = useRoute();

    const notFound = computed(() => {
      return route;
    });

    onMounted(() => {
      console.log(route);
    });
  },
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
header.el-header {
  padding: 0;
}
section.container {
  height: 100%;
}
</style>
