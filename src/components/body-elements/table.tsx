import { ListDetails } from '../../entities/details.types'
import { PokeImage } from './table-elements';

const DataTable = ({
  dataList,
}: ListDetails) => {
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
            { dataList.map((data, index) => {
              return (
                data &&
                <tr key={`${data.name}-${index}`}>
                  <td className="border border-slate-400 px-2">{ data.id }</td>
                  <td className="border border-slate-400 pl-2 pr-10">{ data.name }</td>
                  <td className="border border-slate-400 p-2">
                    <PokeImage url={data.sprites.front_default} name={data.name}/>
                  </td>
                </tr>
              );
            })} 
          </tbody>
        </table>
      </div>
  );
}

export default DataTable