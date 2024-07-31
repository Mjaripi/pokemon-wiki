import axios from 'axios';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import { OnlineDataInput, PokemonData } from '../../entities/components.types';
import { PokemonList } from '../../entities/list.types';
import { PokemonDetails, BubbleChartElement } from '../../entities/details.types';

const onlineData = (args: OnlineDataInput): PokemonData => {
  const { filters } = args
  const limit = 40
  const offset = 0
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const path = `pokemon?limit=${limit}&offset=${offset}`;

  const filterData = (results: UseQueryResult<PokemonDetails, Error>[]) => {
    const { ids, types } = filters;
    
    if(!(ids.length < 1 && types.length > 0)) return results;

    const filteredResults: UseQueryResult<PokemonDetails, Error>[] = [];
    results.forEach((result) => {
      if (result.data?.types.some((type) => types.includes(type.type.name)))
        filteredResults.push(result);
    })

    return filteredResults;
  };

  const filterResultsTypes = (results: UseQueryResult<PokemonDetails, Error>[]) => {
    const { ids, types } = filters;

    if (ids.length < 1) return results;
    
    const filteredResults: UseQueryResult<PokemonDetails, Error>[] = [];
    results.forEach((result) => {
      if(result.data?.types.every((element) => types.includes(element.type.name)))
        filteredResults.push(result);
    })

    return filteredResults;
  }

  const listTypes = (results: UseQueryResult<PokemonDetails, Error>[]) => {
    const types: string[] = [];

    filterResultsTypes(results).forEach((result) => {
      result.data?.types.forEach((detail) => {
        if(!types.includes(detail.type.name)) types.push(detail.type.name)
      })
    });

    return types;
  };

  const filterResultsDist = (results: UseQueryResult<PokemonDetails, Error>[]) => {
    const { ids, types } = filters;
    if (ids.length < 1 && types.length < 1) return results;
    const filteredResults: UseQueryResult<PokemonDetails, Error>[] = [];
    results.forEach((result) => {
      if (result.data) {
        if (ids.length > 0) {
          if (ids.includes(result.data.id))
            filteredResults.push(result);
        } else {
          if (result.data.types.some((element) => types.includes(element.type.name)))
            filteredResults.push(result);
        }
      }
    });

    return filteredResults;
  }

  const prepDist = (results: UseQueryResult<PokemonDetails, Error>[]) => {
    const data: BubbleChartElement[] = [];
    
    filterResultsDist(results).forEach((result) => {
      if (result.data){
        const weight = (result.data.weight * 0.1).toFixed(2);
        const height = (result.data.height * 0.1).toFixed(2);

        let foundIndex = -1;
        
        data.forEach((element, index) => {
          if (element.x === weight && element.y === height)
            foundIndex = index;
        })

        if(foundIndex >= 0) {
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

  const { data: foundList } = useQuery({
    queryKey: ['dexList'],
    queryFn: () => axios.get(`${baseUrl}${path}`)
      .then((response) => response.data as PokemonList),
  });

  const pokeList = foundList ? foundList.results : [];

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
        data: filterData(results).map((result) => result.data),
        types: listTypes(results),
        heightAndWeightDist: prepDist(results),
        pending: results.some((result) => result.isPending),
      }
    }
  });

  return pokeDataQueries;
}

export default onlineData;