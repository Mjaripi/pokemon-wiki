import { selectedColor } from '../common';
import { PokemonDetails, PokemonType } from '../../entities/details.types';
import { DataTableArgs } from '../../entities/components.types'
import { PokeImage } from './table-elements';

const DataTable = (args: DataTableArgs) => {
  const { dataList, filters, setFilters } = args;

  const selectRow = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number,
    currentTypes: PokemonType[]
  ) => {
    const { ids, types } = filters;
    if (!(ids.length < 1 && types.length > 0)) {
      const foundIdIndex = ids.indexOf(id);
      const currentClassName = event.currentTarget.className 

      if (foundIdIndex >= 0) {
        ids.splice(foundIdIndex,1);
        event.currentTarget.className = currentClassName.replace(selectedColor, '');
        
        currentTypes.forEach((element) => {
          if (types.includes(element.type.name)) {
            const foundTypeIndex = types.indexOf(element.type.name);

            types.splice(foundTypeIndex,1);
          }
        })
      } else {
        ids.push(id)
        event.currentTarget.className = currentClassName + selectedColor;

        currentTypes.forEach((element) => {
          types.push(element.type.name)
        })
      }

      setFilters({
        ids,
        types,
      })
    }
  }

  return (
    <div className="basis-2/6 border p-2 rounded-md">
        <div className="overflow-y-auto h-full">
          <table className="w-full border-collapse border border-teal-500 rounded">
            <thead className="bg-teal-500 sticky top-0">
              <tr>
                <th className="border border-teal-500 text-gray-800">
                  <p className="font-mono text-xl">id</p>
                </th>
                <th className="border border-teal-500 text-gray-800">
                  <p className="font-mono text-xl">Nombre</p>
                </th>
                <th className="border border-teal-500 text-gray-800">
                  <p className="font-mono text-xl">Sprite</p>
                </th>
              </tr>
            </thead>
            <tbody>
              { dataList.map((data, index) => {
                return (
                  data &&
                  <tr key={`${data.name}-${index}`} onClick={(e) => selectRow(e,data.id, data.types)}>
                    <td className="border border-slate-400 w-1/12">
                      <p className="font-mono text-center font-bold">{ data.id }</p>
                    </td>
                    <td className="border border-slate-400 w-8/12">
                      <p className="font-mono indent-4">{ data.name.charAt(0).toUpperCase() + data.name.slice(1) }</p>
                    </td>
                    <td className="border border-slate-400 w-3/12">
                      <PokeImage url={data.sprites.front_default} name={data.name}/>
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

export default DataTable