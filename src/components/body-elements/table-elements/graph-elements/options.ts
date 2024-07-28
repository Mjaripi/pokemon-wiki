import { TooltipModel, TooltipItem } from "chart.js";
import { BubbleChartElement } from "../../../../entities/details.types";

const labelFormat = function (
  this: TooltipModel<"bubble">,
  tooltipItem: TooltipItem<"bubble">,
){
  return `(${tooltipItem.parsed.x} kg, ${tooltipItem.parsed.y} m): ${(tooltipItem.raw as BubbleChartElement).count} PkMn`
}

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Altura (en Metros, m)'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Peso (en Kilogramos, kg)'
      }
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: labelFormat,
      }
    },
  },
};

export default options;