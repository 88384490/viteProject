<template>
  <div class="home">
    <div class="chart">
      <el-row justify="space-around" gutter="10">
        <el-col
          :span="24 / spanArr.length"
          v-for="(item, index) in spanArr"
          :key="index"
        >
          <el-card shadow="hover" class="box-card">
            <span class="box-card-title">{{ item.name }}</span>
            <span class="box-card-content">
              <span class="data">{{ item.data }}</span>
              <i class="el-icon-top icon" v-if="item.type === 'up'"></i>
              <i class="el-icon-bottom icon" v-else></i>
            </span>
          </el-card>
        </el-col>
      </el-row>
      <div class="charts-container-1">
        <el-row
          :gutter="10"
          justify="space-between"
          style="width: 100%; height: 100%"
        >
          <el-col :span="12" style="padding-left: 0">
            <div id="fan"></div>
          </el-col>
          <el-col :span="12" style="padding-right: 0">
            <div id="follow"></div>
          </el-col>
        </el-row>
      </div>
      <div class="charts-container-2">
        <el-row
          :gutter="10"
          justify="space-between"
          style="width: 100%; height: 100%"
        >
          <el-col :span="12" style="padding-left: 0">
            <div id="chat"></div>
          </el-col>
          <el-col :span="12" style="padding-right: 0">
            <div id="chat2"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted } from "vue"
import * as echarts from "echarts"
import { fanOptions, followOptions, chatOptions } from "./event/Home"

let fanChart: any, followChart: any, chatChart: any

onMounted(() => {
  console.log("mounted")
  initFan()
  initFollow()
  initChat()
  initChat2()
  window.addEventListener("resize", () => {
    chartResize()
  })
})

onUpdated(() => {
  console.log("updated")
  console.log(echarts)
})

const spanArr = [
  {
    name: "粉丝数",
    data: 20,
    type: "up",
  },
  {
    name: "弹幕数",
    data: 20,
    type: "down",
  },
  {
    name: "今日流水",
    data: 20,
    type: "up",
  },
]
const log = (message: any) => {
  console.log(message)
}
const initFan = () => {
  fanChart = echarts.init(document.querySelector("#fan") as HTMLElement)
  fanChart.setOption(fanOptions)
}
const initFollow = () => {
  followChart = echarts.init(document.querySelector("#follow") as HTMLElement)
  followChart.setOption(followOptions)
}
const initChat = () => {
  chatChart = echarts.init(document.querySelector("#chat") as HTMLElement)
  chatChart.setOption(chatOptions)
}
const initChat2 = () => {
  chatChart = echarts.init(document.querySelector("#chat2") as HTMLElement)
  chatChart.setOption(chatOptions)
}

const chartResize = () => {
  fanChart.resize()
  followChart.resize()
  chatChart.resize()
  initChat2.resize()
}
</script>
<style lang="scss">
@import "../Common.scss";
@import "../assets/style/Home.scss";
</style>
