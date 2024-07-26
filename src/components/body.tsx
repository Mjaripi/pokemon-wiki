import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { DataTable, DataFilters, DataGraph } from './body-elements'
import { PokemonList } from '../entities/list.types'

const BodyElement = () => {
  const limit = 30
  const offset = 0
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const path = `pokemon?limit=${limit}&offset=${offset}`;

  // separate the axios call on a separate method, so it can be defined on the queryKey.
  const { data: pokeList } = useQuery({
    queryKey: ['dexList'],
    queryFn: () => axios.get(`${baseUrl}${path}`)
      .then((response) => response.data as PokemonList),
  });

  //Add queries based on pokelist data

	return (
    <div className="grid grid-cols-3 gap-4">
      <DataTable results={ pokeList ? pokeList.results : []}/>
      <DataFilters />
      <DataGraph />
    </div>
	);
}

export default BodyElement