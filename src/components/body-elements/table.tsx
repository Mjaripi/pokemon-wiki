import { PokemonList } from '../../entities/list.types'

const DataTable = ({
  results,
}: PokemonList
) => {
  return (
    <div className="col-span-1 border p-5 rounded-md">
        <table className="w-full border-collapse border border-slate-500 rounded">
          <thead className="bg-teal-500">
            <tr>
              <th className="text-gray-800 px-2">id</th>
              <th className="text-gray-800 px-12">Nombre</th>
              <th className="text-gray-800 px-4">Sprite</th>
            </tr>
          </thead>
          <tbody>
            { results.map((element, index) => {
              return (
                <tr key={index}>
                  <td className="border border-slate-400 px-2">{ index + 1 }</td>
                  <td className="border border-slate-400 pl-2 pr-10">{ element.name }</td>
                  <td className="border border-slate-400 p-2">IMAGE</td>
                </tr>
              )
            })} 
          </tbody>
        </table>
      </div>
  );
}

export default DataTable