
import { FilterElements } from '../entities/details.types'

const emptyFilters: FilterElements = {
  ids: [],
  types: [],
}

const typesDicc: {
	[key: string]: string
} = {
	grass: 'Planta',
	poison: 'Veneno',
	fire: 'Fuego',
	flying: 'Volador',
	water: 'Agua',
	bug: 'Bicho',
	normal: 'Normal',
	electric: 'Eléctrico',
	ground: 'Tierra',
}

export {
  emptyFilters,
  typesDicc
}