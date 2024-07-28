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
import { options } from './graph-elements';
import { ListGraphData } from '../../entities/details.types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const DataGraph = (args: ListGraphData) => {
  const { graphList } = args;

  const data = {
    datasets: [
      {
        label: 'Pokémons',
        data: graphList,
        borderColor: 'grey',
        backgroundColor: 'teal',
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