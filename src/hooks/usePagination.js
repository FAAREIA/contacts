import { useState } from 'react';

const usePagination = (initialState) => {
	const [state, setState] = useState(initialState);

	const updateState = (page) => {
		if (page === 1) return setState(initialState);

		const offset = state.itemsPerPage * (page - 1);
		return setState({ ...state, currentPage: page, offset });
	};

	return [state, updateState];
};

export default usePagination;
