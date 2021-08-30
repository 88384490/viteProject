<template>
  <div class="header shadow">
    <img
      src="https://gw.alicdn.com/tfs/TB14lnVxGL7gK0jSZFBXXXZZpXa-990-200.png"
      alt="logo"
      class="logo"
      @click="goHome"
    />
    <el-input size="mini" class="search-input" v-if="enableSearch">
      <template v-slot:append>
        <el-button size="mini" icon="el-icon-s-promotion" @click="reload" />
      </template>
    </el-input>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IRouterItem } from "/@/router/interface";
export default defineComponent({
  name: "Header",
  setup(props) {
    const router = useRouter();
    const route = useRoute() as IRouterItem;
    const enableSearch = computed(() => route.meta?.search);
    const reload = () => {
      window.location.reload();
    };
    const goHome = () => {
      router.push("/");
    };

    return {
      reload,
      goHome,
      enableSearch,
    };
  },
});
</script>
<style lang="scss" scoped>
.logo {
  width: 120px;
  height: 25px;
}
.header {
  padding: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search-input {
    width: 230px;
  }
}
</style>
