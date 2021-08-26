import * as echarts from "echarts/core";
import { BarChart, BarSeriesOption } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { IBarChartParam, IEchartsItem } from "@/interface";

class Echarts implements IEchartsItem {
  public _chart: any | undefined;
  constructor() {
    this._chart = Echarts.initChart();
  }
  private static initChart() {
    const components: any[] = [TitleComponent, TooltipComponent, GridComponent];
    const charts: any[] = [BarChart];
    const installEvent: any[] = [CanvasRenderer];
    installEvent.concat([...components, ...charts]);
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      BarChart,
      CanvasRenderer,
    ]);
    return echarts;
  }

  public useBarChart(options: IBarChartParam) {
    const { el } = options;
    this._chart.init(el);
    return this._chart;
  }

  public setOptions(options: any) {
    this._chart.setOptions(options);
    return this._chart;
  }
}

export { Echarts };
