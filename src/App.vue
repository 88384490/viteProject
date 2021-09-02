<template>
  <el-config-provider :locale="local">
    <transition name="el-fade">
      <router-view />
    </transition>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/lib/locale/lang/zh-cn"
const local = zhCn
</script>

<style lang="scss">
@import "App.scss";
</style>
