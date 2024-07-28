import { TooltipModel, TooltipItem } from "chart.js";
import { BubbleChartElement } from "../../../../entities/details.types";

const labelFormat = function (
  this: TooltipModel<"bubble">,
  tooltipItem: TooltipItem<"bubble">,
){
  const xValue = tooltipItem.parsed.x;
  const yValue = tooltipItem.parsed.y;
  const countValue = (tooltipItem.raw as BubbleChartElement).count;

  return `(${xValue} kg, ${yValue} m): ${countValue} ${countValue > 1 ? 'PkMns' : 'PkMn'}`
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