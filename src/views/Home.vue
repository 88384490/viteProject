<template>
  <div class="home">
    <img class="hidden" alt="Vue logo" src="../assets/logo.png" />
    <div class="chart">
      <div class="charts-container-1">
        <div id="fan"></div>
        <div id="follow"></div>
      </div>
      <div class="charts-container-2">
        <div id="chat"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted } from "vue";
import * as echarts from "echarts";
import { fanOptions, followOptions, chatOptions } from "./event/Home";

onMounted(() => {
  console.log("mounted");
  initFan();
  initFollow();
  initChat();
});

onUpdated(() => {
  console.log("updated");
  console.log(echarts);
});

const log = (message: any) => {
  console.log(message);
};
const initFan = () => {
  const el = document.querySelector("#fan") as HTMLElement;
  const fanChart = echarts.init(el);
  fanChart.setOption(fanOptions);
};
const initFollow = () => {
  const el = document.querySelector("#follow") as HTMLElement;
  const followChart = echarts.init(el);
  followChart.setOption(followOptions);
};
const initChat = () => {
  const el = document.querySelector("#chat") as HTMLElement;
  const chatChart = echarts.init(el);
  chatChart.setOption(chatOptions);
};
</script>
<style lang="scss">
@import "../assets/style/Home.scss";
</style>
