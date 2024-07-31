import React from 'react';
import { onlineData, offlineData } from './data';
import { DataTable, DataSideBar, DataGraph } from './body-elements';
import { BodyInput } from '../entities/components.types';
import { useState } from 'react';

const BodyElement = ({ filters, setFilters }: BodyInput) => {
  const [openDb, setOpenDb] = useState(null as (IDBFactory | null));
  const pokeDataQueries = onlineData({ filters });

  offlineData({ pokeDataQueries, openDb })

	return (
    <div className="flex flex-row h-5/6 gap-4">
      <DataTable dataList={ pokeDataQueries.data } filters={ filters } setFilters={ setFilters } />
      <DataSideBar typeList={ pokeDataQueries.types} filters={ filters } setFilters={ setFilters } openDb={openDb} setOpenDb={setOpenDb}/>
      <DataGraph graphList={ pokeDataQueries.heightAndWeightDist } />
    </div>
	);
}

export default BodyElement