import axios from 'axios';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import { DataTable, DataFilters, DataGraph } from './body-elements';
import { PokemonList } from '../entities/list.types';
import { PokemonDetails } from '../entities/details.types';

const listTypes = (results: UseQueryResult<PokemonDetails, Error>[]) => {
  const types: string[] = [];

  results.forEach((result) => {
    result.data?.types.forEach((detail) => {
      if(!types.includes(detail.type.name)) types.push(detail.type.name)
    })
  })

  return types;
};

const BodyElement = () => {
  const limit = 30
  const offset = 0
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const path = `pokemon?limit=${limit}&offset=${offset}`;

  const { data: foundList } = useQuery({
    queryKey: ['dexList'],
    queryFn: () => axios.get(`${baseUrl}${path}`)
      .then((response) => response.data as PokemonList),
  });

  const pokeList = foundList ? foundList.results : [];

  //Add queries based on pokelist data
  const pokeDataQueries = useQueries({
    queries: pokeList.map((element, index) => {
      return {
        queryKey: [`data${index}`],
        enabled: pokeList.length > 0,
        queryFn: () => axios.get(element.url)
          .then((response) => response.data as PokemonDetails)
      }
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        types: listTypes(results),
      }
    }
  });

  console.log(pokeDataQueries.types)

	return (
    <div className="grid grid-cols-3 gap-4">
      <DataTable dataList={ pokeDataQueries.data }/>
      <DataFilters typeList={ pokeDataQueries.types } />
      <DataGraph dataList={ pokeDataQueries.data } />
    </div>
	);
}

export default BodyElement