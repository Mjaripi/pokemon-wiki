import { FilterElements, BubbleChartElement } from './details.types'
import { PokemonDetails } from './details.types';

export interface HeaderArgs {
  filters: FilterElements,
}

export interface BodyArgs {
  filters: FilterElements,
  setFilters: React.Dispatch<React.SetStateAction<FilterElements>>,
}

export interface DataTableArgs {
  dataList: (PokemonDetails | undefined)[]
  filters: FilterElements,
  setfilters: React.Dispatch<React.SetStateAction<FilterElements>>
}

export interface DataFiltersArgs {
  typeList: string[]
  filters: FilterElements,
  setfilters: React.Dispatch<React.SetStateAction<FilterElements>>
}

export interface DataGraphArgs {
  graphList: BubbleChartElement[]
}

export interface PokeImageArgs {
  url: string | null,
  name: string,
}