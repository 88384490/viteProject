interface baseOption {
  el: Element;
}

interface IBarChartParam extends baseOption {
  option: any;
}

interface IEchartsItem {
  useBarChart(options: IBarChartParam): any;
}

export { IEchartsItem, IBarChartParam };
