import { DataTableArgs } from '../../entities/components.types'
import { PokeImage } from './table-elements';

const DataTable = (args: DataTableArgs) => {
  const { dataList, filters, setFilters } = args;

  const selectRow = (id: number) => {
    const { ids, types } = filters;
    const foundIndex = ids.indexOf(id);

    if (foundIndex >= 0) {
      ids.splice(foundIndex,1);
    } else {
      ids.push(id)
    }

    setFilters({
      ids,
      types,
    })
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
                  <tr key={`${data.name}-${index}`} onClick={() => selectRow(data.id)}>
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