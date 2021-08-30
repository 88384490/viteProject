<template>
  <div>
    <p>404</p>
    <p>没有找到您需要的页面 {{ countDown }}秒后回到主页面</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Error",
  setup() {
    const router = useRouter();
    const { fullPath } = toRefs(useRoute());

    const data = {
      countDown: ref(5),
    };
    const methods = {
      /**
       * 倒计时返回
       */
      countDownBackFunc() {
        const time = setInterval(() => {
          data.countDown.value--;
          if (data.countDown.value === 0) {
            clearInterval(time);
            router.push({ path: "/" });
          }
        }, 1000);
      },
    };
    onMounted(() => {
      methods.countDownBackFunc();
    });
    return {
      ...data,
      ...methods,
    };
  },
});
</script>
<style></style>
