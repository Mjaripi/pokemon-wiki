import { ListDetails } from '../../entities/details.types'
import { PokeImage } from './table-elements';

const DataTable = ({
  dataList,
}: ListDetails) => {
  return (
    <div className="basis-2/6 border p-2 rounded-md">
        <div className="overflow-y-auto h-full">
          <table className="w-full border-collapse border border-teal-500 rounded">
            <thead className="bg-teal-500 sticky top-0">
              <tr>
                <th className="border border-teal-500 text-gray-800">
                  <p className="text-xl">id</p>
                </th>
                <th className="border border-teal-500 text-gray-800">
                  <p className="text-xl">Nombre</p>
                </th>
                <th className="border border-teal-500 text-gray-800">
                  <p className="text-xl">Sprite</p>
                </th>
              </tr>
            </thead>
            <tbody>
              { dataList.map((data, index) => {
                return (
                  data &&
                  <tr key={`${data.name}-${index}`}>
                    <td className="border border-slate-400 w-1/12">
                      <p className="text-center">{ data.id }</p>
                    </td>
                    <td className="border border-slate-400 w-8/12">
                      <p className="indent-4">{ data.name }</p>
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