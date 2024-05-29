import { RiUserSearchFill } from "react-icons/ri";
const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
			<RiUserSearchFill className='w-6 h-6 outline-none'/>
            </button>
		</form>
	);
};
export default SearchInput;










//STARTER CODE
// import { RiUserSearchFill } from "react-icons/ri";
// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 			<RiUserSearchFill className='w-6 h-6 outline-none'/>
//             </button>
// 		</form>
// 	);
// };
// export default SearchInput;