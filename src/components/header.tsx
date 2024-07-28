import { FilterView, TitleSpace } from './header-elements'
import { HeaderArgs } from '../entities/components.types';

const HeaderElement = (args: HeaderArgs) => {
	const { filters, setFilters } = args;

	console.log(filters)
	return (
		<div className="flex flex-row h-1/6 gap-2 pb-2 bg-cyan-950 border p-5 rounded-md">
			<TitleSpace />
			<FilterView filters={filters} setFilters={setFilters}/>
		</div>
	);
};

export default HeaderElement