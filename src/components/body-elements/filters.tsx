import { typesDicc, selectedColor } from '../common';
import { DataFiltersArgs } from '../../entities/components.types';
import { EventEmitter } from 'stream';

const DataFilters = (args: DataFiltersArgs) => {
	const { typeList, filters, setFilters } = args;

	const filterTypeList = (data: string[]) => {
    const filteredTypes: string[] = [];
    const { types } = filters;
  
    data.forEach((element) => {
			if(( data.some((type) => types.includes(type))))
				filteredTypes.push(element);
    })

    return filteredTypes;
  };

	const selectRow = (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
		data: string
	) => {
		const { ids, types } = filters;
		if (ids.length < 1){
			const foundIndex = types.indexOf(data);
			const currentClassName = event.currentTarget.className 

			if (foundIndex >= 0) {
				types.splice(foundIndex,1);
				event.currentTarget.className = currentClassName.replace(selectedColor, '')
			} else {
				types.push(data)
				event.currentTarget.className = currentClassName + selectedColor;
			}

			setFilters({
				ids,
				types,
			})
		}
	}

	return (
		<div className="basis-1/6 border p-6 rounded-md">
			<div className="overflow-y-auto h-full">
				<p className="font-mono font-bold text-xl pb-2 text-center">Filtros</p>
				<table className="w-full border-collapse border border-teal-500 rounded">
					<thead className="bg-teal-500 sticky top-0">
						<tr>
							<th className="border border-teal-500 text-gray-800">
								<p className="font-mono text-xl">Tipo</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{ typeList.map((data, index) => {
							return (
								<tr key={`${data}-${index}`} onClick={(event) => selectRow(event, data)}>
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