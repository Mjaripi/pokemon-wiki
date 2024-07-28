import { emptyFilters, typesDicc } from '../common'
import { FilterViewArgs } from "../../entities/components.types";

const FilterView = ({ filters, setFilters }: FilterViewArgs) => {
  const { ids, types } = filters;

  const translateTypes = (typesData: string[]) => {
		return typesData.map((type) => {
			return typesDicc[type]
		}).toString()
	}

	return (
    <div className="basis-2/3 text-left">
      { (ids.length > 0 || types.length > 0) &&
					(
						<div>
							<p className="font-mono text-l text-yellow-300 font-bold">Filtros Activos <button className="text-sky-400" onClick={() => setFilters(emptyFilters)}> (Limpiar)</button></p>
							 { ids.length > 0 && <p className="font-mono text-l text-gray-200"> Ids: {ids.toString()}.</p> }
							 { types.length > 0 && <p className="font-mono text-l text-gray-200"> Tipos: {translateTypes(types)}.</p> }
						</div>
					)
				}
    </div>
	)

};

export default FilterView