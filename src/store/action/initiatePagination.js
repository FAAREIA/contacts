import initialState from '../initialState/pagination';

const initiatePagination = ({itemsPerPage = 50, totalItems}) => ({
	...initialState,
	itemsPerPage,
	totalPages: Math.ceil(totalItems / itemsPerPage)
});

export default initiatePagination;