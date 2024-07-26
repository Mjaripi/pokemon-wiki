export interface PokemonRow {
  name: string;
  url: string;
}

export interface PokemonList {
  results: PokemonRow[],
}
