interface PokemonType {
  slot: number,
  type: {
    name: string,
    url: string,
  }
}

interface PokemonSprites {
  "back_default": string | null
  "front_default": string | null,
}

export interface PokemonDetails {
  id: number,
  name: string,
  types: PokemonType[]
  weight: number,
  height: number,
  sprites: PokemonSprites,
}

export interface ListDetails {
  dataList: (PokemonDetails | undefined)[]
}

export interface ListTypes {
  typeList: string[]
}

export interface ListGraphData {
  graphList: BubbleChartElement[]
}

export interface ImageData {
  url: string | null,
  name: string,
}

export interface BubbleChartElement {
  x: string,
  y: string,
  count: number,
}

export interface BubbleChartData {
  data: BubbleChartElement[]
}
