<template>
  <el-menu-item :index="path">
    <template #title>
      <i v-if="icon" :class="icon" />
      <span>{{ menuName }}</span>
    </template>
  </el-menu-item>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, toRefs } from "vue"
import { useRoute } from "vue-router"

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
    const route = useRoute()
    const {
      menuName = "",
      path = "",
      icon = "",
      disabled = false,
    }: unknown | any = toRefs(props)

    onUpdated(() => {
      console.log(path)
    })

    return {
      menuName,
      path,
      icon,
      disabled,
      route,
    }
  },
})
</script>
<style></style>
