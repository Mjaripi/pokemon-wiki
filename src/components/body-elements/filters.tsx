import { typesDicc } from '../common';
import { DataFiltersArgs } from '../../entities/components.types';

const DataFilters = (args: DataFiltersArgs) => {
	const { typeList, filters, setFilters } = args;

	const selectRow = (data: string) => {
		const { ids, types } = filters;
		const foundIndex = types.indexOf(data);

    if (foundIndex >= 0) {
			types.splice(foundIndex,1);
    } else {
			types.push(data)
		}

		setFilters({
			ids,
			types,
		})
	}

	return (
		<div className="basis-1/6 border p-6 rounded-md">
			<div className="overflow-y-auto h-full">
				<table className="w-full border-collapse border border-teal-500 rounded">
					<thead className="bg-teal-500 sticky top-0">
						<tr>
							<th className="border border-teal-500 text-gray-800">
								<p className="font-mono text-xl">Tipos</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{ typeList.map((data, index) => {
							return (
								<tr key={`${data}-${index}`} onClick={() => selectRow(data)}>
									<td id={data} className="border border-slate-400 px-2">
										<p className="font-mono font-bold text-center">{typesDicc[data]}</p>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
    </div>
	)
}

export default DataFilters