import { SET_CONNECTIONS } from './types';

const setConnections = (connectionsId, contacts) => ({
	connectionsId,
	contacts,
	type: SET_CONNECTIONS,
});

export default setConnections;
