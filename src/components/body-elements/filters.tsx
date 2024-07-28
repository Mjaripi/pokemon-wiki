import { ListTypes } from '../../entities/details.types';

const DataFilters = (
{
	typeList,
}: ListTypes) => {
	return (
		<div className="basis-1/6 border p-5 rounded-md">
      <table className="w-full border-collapse border border-slate-500 rounded">
				<thead className="bg-teal-500">
					<tr>
						<th className="text-gray-800 px-2">Tipos</th>
					</tr>
				</thead>
				<tbody>
					{ typeList.map((data, index) => {
						return (
							<tr key={`${data}-${index}`}>
								<td className="border border-slate-400 px-2">{ data }</td>
							</tr>
						);
					})}
				</tbody>
			</table>
    </div>
	)
}

export default DataFilters