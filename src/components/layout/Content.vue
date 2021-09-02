<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" :key="key" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { computed } from "vue"
const route = useRoute()
const kay = computed(() => route.path)
</script>

<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
