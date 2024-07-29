import { typesDicc, selectedColor } from '../common'
import { FilterViewArgs } from "../../entities/components.types";

const FilterView = ({ filters, setFilters }: FilterViewArgs) => {
  const { ids, types } = filters;

  const translateTypes = (typesData: string[]) => {
    const uniqueFilters = typesData.filter((item, index) => {
      return typesData.indexOf(item) === index;
    })

		return uniqueFilters.map((type) => {
			return typesDicc[type]
		}).toString()
	}

  const clearFilters = () => {
    const selectedRow = Array.from(document.getElementsByClassName(selectedColor))

    selectedRow.forEach((element) => {
      const currentClassName = element.className
      element.className = currentClassName.replace(selectedColor, '')
    })
    setFilters({ ids: [], types: [] })
  }

	return (
    <div className="basis-2/3 text-left">
      <div className="overflow-y-auto h-full text-wrap">
        { (ids.length > 0 || types.length > 0) &&
            (
              <div>
                <p className="font-mono text-l indent-4 text-amber-400 font-bold">Filtros Activos <button className="text-sky-400" onClick={() => clearFilters()}> (Limpiar)</button></p>
                  { ids.length > 0 && <p className="font-mono text-l indent-5 text-gray-400"> Ids: {ids.toString()}.</p> }
                  { types.length > 0 && <p className="font-mono text-l indent-5 text-gray-400"> Tipos: {translateTypes(types)}.</p> }
              </div>
            )
          }
      </div>
    </div>
	)

};

export default FilterView