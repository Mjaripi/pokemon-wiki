import { typesDicc, selectedColor } from '../common';
import { DataFiltersArgs } from '../../entities/components.types';

const DataFilters = (args: DataFiltersArgs) => {
	const { typeList, filters, setFilters, openDb ,setOpenDb } = args;

	const toggleIndexDb = () => {
		if (openDb) {
			//clear DB
			setOpenDb(null)
		} else {
			setOpenDb(window.indexedDB)
		}
	};

	const clearFilters = () => {
    const selectedRow = Array.from(document.getElementsByClassName(selectedColor))

    selectedRow.forEach((element) => {
      const currentClassName = element.className
      element.className = currentClassName.replace(selectedColor, '')
    })
    setFilters({ ids: [], types: [] })
  }

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
		<div className="basis-1/6 border p-3 rounded-md">
			<div className="overflow-y-auto h-full w-full">
				<div className="font-bold border-b-2 mb-2">
					<p className="text-xl pb-2 text-center">Opciones</p>
					<button
						className="
							bg-sky-400 
							disabled:bg-sky-200 
							disabled:text-gray-400 
							hover:bg-sky-700 
							hover:text-gray-50
							w-full rounded-md py-3 mb-2"
						type="button"
						onClick={() => clearFilters()}
						disabled={ filters.ids.length < 1 && filters.types.length < 1 }
					>
						Limpiar Filtros
					</button>
					<button
						className="
							bg-amber-400 
							hover:bg-amber-700 
							hover:text-gray-50
							w-full rounded-md py-1 mb-2"
						type="button"
						onClick={() => toggleIndexDb()}
					>
						Trabajar { openDb ? 'online' : 'Offline' } 
					</button>
					<button
						className="
							bg-green-500 
							disabled:bg-green-200 
							disabled:text-gray-400 
							hover:bg-green-800 
							hover:text-gray-50 
							w-full rounded-md py-1 mb-2"
						type="button"
						disabled={!openDb}
					>
						Agregar
					</button>
					<button
						className="
							bg-red-500 
							disabled:bg-red-200 
							disabled:text-gray-400 
							hover:bg-red-800 
							hover:text-gray-50 
							w-full rounded-md py-1 mb-2"
						type="button"
						disabled={!openDb}
					>
						Eliminar
					</button>
				</div>
				<div>
					<p className="font-bold text-xl pb-2 text-center">Filtros</p>
					<div className="overflow-y-auto w-full border rounded-md mb-2">
						<table className="w-full border-collapse">
							<thead className="bg-teal-500 sticky top-0">
								<tr>
									<th className="border border-teal-500 text-gray-800">
										<p className="text-xl">Tipo</p>
									</th>
								</tr>
							</thead>
							<tbody>
								{ typeList.map((data, index) => {
									return (
										<tr key={`${data}-${index}`} onClick={(event) => selectRow(event, data)}>
											<td id={data} className="border px-2">
												<p className="text-center">{typesDicc[data]}</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
    </div>
	)
}

export default DataFilters