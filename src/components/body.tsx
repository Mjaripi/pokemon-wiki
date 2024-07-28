import axios from 'axios';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import { DataTable, DataFilters, DataGraph } from './body-elements';
import { PokemonList } from '../entities/list.types';
import { PokemonDetails, BubbleChartElement } from '../entities/details.types';

const listTypes = (results: UseQueryResult<PokemonDetails, Error>[]) => {
  const types: string[] = [];

  results.forEach((result) => {
    result.data?.types.forEach((detail) => {
      if(!types.includes(detail.type.name)) types.push(detail.type.name)
    })
  });

  return types;
};

const prepDist = (results: UseQueryResult<PokemonDetails, Error>[]) => {
  const data: BubbleChartElement[] = [];

  results.forEach((result) => {
    if (result.data){
      const weight = (result.data.weight * 0.1).toFixed(2);
      const height = (result.data.height * 0.1).toFixed(2);

      let foundIndex = -1;
      
      data.forEach((element, index) => {
        if (element.x === weight && element.y === height)
          foundIndex = index;
      })

      if(foundIndex > 0) {
        const {x, y, count} = data[foundIndex]
        data.push({ x, y, count: count + 1 })
        data.splice(foundIndex,1);
      } else {
        data.push({ x: weight, y: height, count: 1 })
      }
    }
  });

  return data;
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
        heightAndWeightDist: prepDist(results),
      }
    }
  });

	return (
    <div className="flex flex-row h-5/6 gap-4">
      <DataTable dataList={ pokeDataQueries.data }/>
      <DataFilters typeList={ pokeDataQueries.types } />
      <DataGraph graphList={ pokeDataQueries.heightAndWeightDist } />
    </div>
	);
}

export default BodyElement