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
import { options, plugins } from './graph-elements';
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
      }
    ],
  };

  console.log(graphList)
	return (
		<div className="col-span-1 border p-5 rounded-md">
      <Bubble data={data} options={options}/>
    </div>
	)
}

export default DataGraph