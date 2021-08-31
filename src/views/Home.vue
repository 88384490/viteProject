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
            <span>{{ item.data }}</span>
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
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted } from "vue"
import * as echarts from "echarts"
import { fanOptions, followOptions, chatOptions } from "./event/Home"

onMounted(() => {
  console.log("mounted")
  initFan()
  initFollow()
  initChat()
})

onUpdated(() => {
  console.log("updated")
  console.log(echarts)
})

const spanArr = [
  {
    name: "粉丝数",
    data: 20,
  },
  {
    name: "弹幕数",
    data: 20,
  },
  {
    name: "今日流水",
    data: 20,
  },
]
const log = (message: any) => {
  console.log(message)
}
const initFan = () => {
  const el = document.querySelector("#fan") as HTMLElement
  const fanChart = echarts.init(el)
  fanChart.setOption(fanOptions)
}
const initFollow = () => {
  const el = document.querySelector("#follow") as HTMLElement
  const followChart = echarts.init(el)
  followChart.setOption(followOptions)
}
const initChat = () => {
  const el = document.querySelector("#chat") as HTMLElement
  const chatChart = echarts.init(el)
  chatChart.setOption(chatOptions)
}
</script>
<style lang="scss">
@import "../assets/style/Home.scss";
</style>
