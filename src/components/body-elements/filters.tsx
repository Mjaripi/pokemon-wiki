import { ListTypes } from '../../entities/details.types';

const DataFilters = (
{
	typeList,
}: ListTypes) => {
	return (
		<div className="col-span-1 border p-5 rounded-md">
      <table className="w-full border-collapse border border-slate-500 rounded">
			<thead className="bg-teal-500">
            <tr>
              <th className="text-gray-800 px-2">Tipos</th>
            </tr>
          </thead>
			</table>
			<tbody>
			{ typeList.map((data, index) => {
				return (
					<tr key={`${data}-${index}`}>
						<td className="border border-slate-400 px-2">{ data }</td>
					</tr>
				);
			})}
			</tbody>
    </div>
	)
}

export default DataFilters