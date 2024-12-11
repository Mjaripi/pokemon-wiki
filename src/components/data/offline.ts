import { indexedDbName, dbCollections } from '../common';
import { OfflineDataInput, PokemonData } from '../../entities/components.types';

const offlineData = (args: OfflineDataInput) => {
  const { openDb } = args;

  if(openDb) {
    const { pokeDataQueries } = args;
    const request = openDb.open(indexedDbName, 2)

    request.onerror = (event) => {
      console.error('Error', event);
      console.error(`An error ocurred with IndexedDB: ${indexedDbName}.`);
    };

    request.onupgradeneeded  = () => {
      const dbsNames = request.result;

      if(!dbsNames.objectStoreNames.contains(dbCollections.data))
        dbsNames.createObjectStore(dbCollections.data, {
          keyPath: 'id',
        });

      if(!dbsNames.objectStoreNames.contains(dbCollections.types))
        dbsNames.createObjectStore(dbCollections.types, {
          keyPath: 'id',
        });

      if(!dbsNames.objectStoreNames.contains(dbCollections.heightAndWeightDist))
        dbsNames.createObjectStore(dbCollections.heightAndWeightDist, {
          keyPath: 'id',
        });
    };

    request.onsuccess = () => {
      console.info('IndexedDB Init OK.')
    };

    loadOnlineData(pokeDataQueries);
  }
}

const loadOnlineData = (args: PokemonData) => {
  const { data, types, heightAndWeightDist, pending } = args;
};

const createPokemonData = () => {

};

const removePokemonData = () => {

};

export {
  offlineData,
  createPokemonData,
  removePokemonData,
};