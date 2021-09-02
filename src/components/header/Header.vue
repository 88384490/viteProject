<template>
  <div class="header shadow">
    <div class="left">
      <img
        src="https://gw.alicdn.com/tfs/TB14lnVxGL7gK0jSZFBXXXZZpXa-990-200.png"
        alt="logo"
        class="logo"
        @click="goHome"
      />
      <ElPageHeader @back="goHome" :content="title" />
    </div>
    <div class="right">
      <span>
        <el-input size="mini" class="search-input">
          <template v-slot:append>
            <el-button size="mini" icon="el-icon-s-promotion" />
          </template>
        </el-input>
      </span>
      <span>
        <el-avatar
          class="shadow"
          size="medium"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          @click="reload"
        ></el-avatar>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { ElAvatar, ElBreadcrumb, ElPageHeader } from "element-plus"
import { defineComponent, computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { IRouterItem } from "/@/router/interface"
export default defineComponent({
  name: "Header",
  components: {
    ElAvatar,
    ElBreadcrumb,
    ElPageHeader,
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute() as IRouterItem
    const enableSearch = computed(() => route.meta?.search)
    const title = computed(() => route.meta?.title)
    const reload = () => {
      window.location.reload()
    }
    const goHome = () => {
      router.push("/")
    }

    return {
      reload,
      goHome,
      enableSearch,
      title,
    }
  },
})
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
    width: 250px;
  }
  .left {
    display: flex;
    align-items: center;
    height: 50px;
    .logo {
      margin-right: 85px;
    }
  }

  .right {
    width: 360px;
    height: 50px;
    display: inline-flex;
    justify-content: end;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-right: 5px;

    span {
      display: block;
      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 0;
        margin-left: 20px;
      }
    }
  }
}
</style>
