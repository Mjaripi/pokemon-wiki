import { HeaderArgs } from '../entities/components.types'
const HeaderElement = ({ filters }: HeaderArgs) => {
	const { ids, types } = filters;

	return (
    <div className="flex flex-row h-1/6 gap-4 pb-2">
      <div className="basis-full text-center bg-cyan-950 border p-5 rounded-md">
				<h1 className="text-gray-100 font-bold">POKÉMON WIKI</h1>
			</div>
    </div>
	)
};

export default HeaderElement