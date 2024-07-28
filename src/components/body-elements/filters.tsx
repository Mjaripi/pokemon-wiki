import { ListTypes } from '../../entities/details.types';

const DataFilters = (
{
	typeList,
}: ListTypes) => {
	return (
		<div className="basis-1/6 border p-6 rounded-md">
			<div className="overflow-y-auto h-full">
				<table className="w-full border-collapse border border-teal-500 rounded">
					<thead className="bg-teal-500 sticky top-0">
						<tr>
							<th className="border border-teal-500 text-gray-800">
								<p className="text-xl">Tipos</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{ typeList.map((data, index) => {
							return (
								<tr key={`${data}-${index}`}>
									<td className="border border-slate-400 px-2">
										<p className="bold">{ data }</p>
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