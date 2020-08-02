import {SEARCH_QUERY} from './types';

const searchQuery = query => ({
	query,
	type: SEARCH_QUERY
});

export default searchQuery;