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

export interface HeaderInput extends Omit<FilterUseState, 'setFilters'> {}
export interface FilterViewInput extends Omit<FilterUseState, 'setFilters'> {}
export interface OnlineDataInput extends Omit<FilterUseState, 'setFilters'> {}
export interface BodyInput extends FilterUseState {}
export interface DataTableInput extends FilterUseState {
  dataList: (PokemonDetails | undefined)[]
}
export interface DataSideBarInput extends FilterUseState, OpenDbUseState, FilterElement {}
export interface DataFilterInput extends FilterUseState, FilterElement {}
export interface DataOptionsInput extends OpenDbUseState {}
export interface DataGraphInput {
  graphList: BubbleChartElement[]
}
export interface PokeImageInput {
  url: string | null,
  name: string,
}

export interface PokemonData {
  data: (PokemonDetails | undefined)[];
  types: string[];
  heightAndWeightDist: BubbleChartElement[];
  pending: boolean;
}
export interface OfflineDataInput extends Omit<OpenDbUseState, 'setOpenDb'> {
  pokeDataQueries: PokemonData;
}