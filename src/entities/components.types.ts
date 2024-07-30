import { FilterElements, BubbleChartElement } from './details.types'
import { PokemonDetails } from './details.types';

export interface FilterUseState {
  filters: FilterElements,
  setFilters: React.Dispatch<React.SetStateAction<FilterElements>>,
}

export interface OpenDbUseState {
  openDb: IDBFactory | null,
  setOpenDb: React.Dispatch<React.SetStateAction<IDBFactory | null>>
}

export interface HeaderArgs extends FilterUseState {}
export interface FilterViewArgs extends FilterUseState {}
export interface BodyArgs extends FilterUseState {}
export interface DataTableArgs extends FilterUseState {
  dataList: (PokemonDetails | undefined)[]
}
export interface DataFiltersArgs extends FilterUseState, OpenDbUseState {
  typeList: string[]
}
export interface DataGraphArgs {
  graphList: BubbleChartElement[]
}
export interface PokeImageArgs {
  url: string | null,
  name: string,
}