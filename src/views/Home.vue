<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted } from "vue";
import { Echarts } from "@/plugins/echarts";
let echarts: any | undefined = undefined;

onMounted(() => {
  console.log("mounted");
  echarts = new Echarts();
  renderChart();
});

onUpdated(() => {
  console.log("updated");
  console.log(echarts);
});

const renderChart = () => {
  const el = document.querySelector("#chart");
  const option = {};
  echarts.useBarChart({ el });
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
