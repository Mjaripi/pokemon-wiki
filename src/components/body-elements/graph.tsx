import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { options } from './table-elements/graph-elements';
import { DataGraphArgs } from '../../entities/components.types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DataGraph = (args: DataGraphArgs) => {
  const { graphList } = args;

  const data = {
    datasets: [
      {
        label: 'Pokémons',
        data: graphList,
        borderColor: 'grey',
        backgroundColor: 'rgb(251, 191, 36)',
      }
    ],
  };

	return (
		<div className="basis-3/6 border p-3 rounded-md">
      <Bubble data={data} options={options} />
    </div>
	)
}

export default DataGraph