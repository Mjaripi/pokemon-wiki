
const typesDicc: {
	[key: string]: string
} = {
	steel: 'Acero',
	grass: 'Planta',
	poison: 'Veneno',
	fire: 'Fuego',
	flying: 'Volador',
	water: 'Agua',
	bug: 'Bicho',
	normal: 'Normal',
	electric: 'Eléctrico',
	ground: 'Tierra',
	fairy: 'Hada',
	dragon: 'Dragón',
	ghost: 'Fantasma',
	ice: 'Hielo',
	fighting: 'Lucha',
	psychic: 'Psíquico',
	dark: 'Siniestro',
	rock: 'Roca'
}

const dbCollections = {
	data: 'pokeData',
	types: 'typesData',
	heightAndWeightDist: 'graphData',
}

const selectedColor = 'bg-blue-200'
const indexedDbName = 'local-dex';

export {
  typesDicc,
	dbCollections,
	selectedColor,
	indexedDbName,
}