import React from 'react';
import { typesDicc, selectedColor } from '../../common';
import { DataFilterArgs } from '../../../entities/components.types';

const DataFilters = (args: DataFilterArgs) => {
  const { typeList, filters, setFilters } = args;

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
    <div className="border-b-2 mb-2">
      <p className="font-bold text-xl pb-2 text-center">Filtros</p>
      <button
        className="
          bg-sky-400 
          disabled:bg-sky-200 
          disabled:text-gray-400 
          hover:bg-sky-700 
          hover:text-gray-50
          w-full rounded-md py-2 mb-2"
        type="button"
        onClick={() => clearFilters()}
        disabled={ filters.ids.length < 1 && filters.types.length < 1 }
      >
        Limpiar Filtros
      </button>
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
  );
}

export default DataFilters;