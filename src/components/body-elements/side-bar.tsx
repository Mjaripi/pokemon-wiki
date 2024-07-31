import React from 'react';
import { DataFilters, DataOptions } from './side-bar-elements';
import { DataSideBarInput } from '../../entities/components.types';

const DataSideBar = (args: DataSideBarInput) => {
	const { typeList, filters, setFilters, openDb ,setOpenDb } = args;

	return (
		<div className="basis-1/6 border p-3 rounded-md">
			<div className="overflow-y-auto h-full w-full">
				<DataFilters typeList={typeList} filters={filters} setFilters={setFilters} />
				<DataOptions openDb={openDb} setOpenDb={setOpenDb} />
			</div>
    </div>
	)
}

export default DataSideBar