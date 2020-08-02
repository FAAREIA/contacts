import cloneContacts from '../action/cloneContacts';

const getConnections = (connectionsId, contacts) => {
	const clonedContacts = cloneContacts(contacts);
	const filteredContacts = clonedContacts.filter(e => connectionsId.includes(e.id));

	return filteredContacts;
}

export default getConnections;