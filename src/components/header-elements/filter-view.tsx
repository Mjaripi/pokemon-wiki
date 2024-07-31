import React from 'react';
import { typesDicc } from '../common'
import { FilterViewArgs } from "../../entities/components.types";

const FilterView = ({ filters }: FilterViewArgs) => {
  const { ids, types } = filters;

  const translateTypes = (typesData: string[]) => {
    const uniqueFilters = typesData.filter((item, index) => {
      return typesData.indexOf(item) === index;
    })

		return uniqueFilters.map((type) => {
			return typesDicc[type]
		}).toString()
	}

	return (
    <div className="basis-2/3 text-left bg-inherit">
      <div className="overflow-y-auto h-full text-wrap bg-inherit">
        { (ids.length > 0 || types.length > 0) &&
            (
              <div>
                <p className="text-l indent-4 text-amber-400 font-bold">
                  Filtros Activos
                </p>
                  { ids.length > 0 && <p className="text-l indent-5 text-gray-400"> Ids: {ids.toString()}.</p> }
                  { types.length > 0 && <p className="text-l indent-5 text-gray-400"> Tipos: {translateTypes(types)}.</p> }
              </div>
            )
          }
      </div>
    </div>
	)

};

export default FilterView