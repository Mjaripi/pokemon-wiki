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
