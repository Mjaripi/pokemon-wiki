import { CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScaleChartOptions, scales } from "chart.js";
import { title } from "process";

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Altura'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Peso'
      }
    },
  },
};

export default options;