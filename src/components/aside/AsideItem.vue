<template>
  <Menu class="menu" :defaultPath="defaultPath">
    <template v-slot:container>
      <template v-for="item in menuList" :key="item.path">
        <MenuItem
          v-if="hasHidden(item)"
          :menuName="transformTitle(item)"
          :path="item.path"
          :icon="item.meta.icon"
        />
      </template>
    </template>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Menu from "@/components/aside/Menu.vue";
import MenuItem from "@/components/aside/MenuItem.vue";
import menus from "@/router/routers";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "AsideItem",
  components: {
    Menu,
    MenuItem,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menuList = menus;
    const defaultPath = computed(() => {
      return route.path;
    });

    const transformTitle = (item: any) => {
      return item.meta && item.meta.title ? item.meta.title : "未定义";
    };

    const hasHidden = (item: any) => {
      return item.meta && !item.meta.hidden;
    };

    return {
      menuList,
      defaultPath,
      transformTitle,
      hasHidden,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
}
</style>
