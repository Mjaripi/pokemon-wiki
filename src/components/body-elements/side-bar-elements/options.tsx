import React from 'react';
import { DataOptionsArgs } from '../../../entities/components.types';

const DataOptions = (args: DataOptionsArgs) => {
  const { openDb ,setOpenDb } = args;

  const toggleIndexDb = () => {
		if (openDb) {
			//clear DB
			setOpenDb(null)
		} else {
			setOpenDb(window.indexedDB)
		}
	};

  return (
    <div className="border-b-2 mb-2">
      <p className="font-bold text-xl pb-2 text-center">Opciones</p>
      <button
        className="
          bg-amber-400 
          hover:bg-amber-700 
          hover:text-gray-50
          w-full rounded-md py-1 mb-2"
        type="button"
        onClick={() => toggleIndexDb()}
      >
        Trabajar { openDb ? 'online' : 'Offline' } 
      </button>
      <button
        className="
          bg-green-500 
          disabled:bg-green-200 
          disabled:text-gray-400 
          hover:bg-green-800 
          hover:text-gray-50 
          w-full rounded-md py-1 mb-2"
        type="button"
        disabled={!openDb}
      >
        Agregar
      </button>
      <button
        className="
          bg-red-500 
          disabled:bg-red-200 
          disabled:text-gray-400 
          hover:bg-red-800 
          hover:text-gray-50 
          w-full rounded-md py-1 mb-2"
        type="button"
        disabled={!openDb}
      >
        Eliminar
      </button>
    </div>
  );
};

export default DataOptions;