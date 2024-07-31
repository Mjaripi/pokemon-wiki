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

export interface FilterElement {
  typeList: string[]
}

export interface HeaderArgs extends Omit<FilterUseState, 'setFilters'> {}
export interface FilterViewArgs extends Omit<FilterUseState, 'setFilters'> {}
export interface BodyArgs extends FilterUseState {}
export interface DataTableArgs extends FilterUseState {
  dataList: (PokemonDetails | undefined)[]
}
export interface DataSideBarArgs extends FilterUseState, OpenDbUseState, FilterElement {}
export interface DataFilterArgs extends FilterUseState, FilterElement {}
export interface DataOptionsArgs extends OpenDbUseState {}
export interface DataGraphArgs {
  graphList: BubbleChartElement[]
}
export interface PokeImageArgs {
  url: string | null,
  name: string,
}