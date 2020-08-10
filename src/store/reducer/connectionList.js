import { SEARCH_QUERY, SET_CONNECTIONS } from '../action/types';
import getConnections from '../selector/getConnections';

const reducer = (state, action) => {
	const { type } = action;

	switch (type) {
		case SEARCH_QUERY:
			return { ...state, searchQuery: action.query };
		case SET_CONNECTIONS:
			const connections = getConnections(action.connectionsId, action.contacts);
			return { ...state, connections };
		default:
			return state;
	}
};

export default reducer;
