import { EChartsOption } from "echarts";
const fanOptions: EChartsOption = {
  title: {
    text: "粉丝增长",
    left: "45%",
    top: "8%",
  },
  grid: {
    left: "10%",
    right: "5%",
    top: "20%",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const followOptions: EChartsOption = {
  title: {
    text: "弹幕增长",
    left: "45%",
    top: "8%",
  },
  grid: {
    left: "8%",
    right: "5%",
    top: "20%",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const chatOptions: EChartsOption = {
  title: {
    text: "弹幕排名",
    left: "45%",
  },
  grid: {
    left: "13%",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: "#a90000",
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: "bar",
    },
  ],
};

export { fanOptions, followOptions, chatOptions };
