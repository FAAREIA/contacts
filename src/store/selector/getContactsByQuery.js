import cloneContacts from '../action/cloneContacts';

const getContactsByQuery = (contacts, query) => {
	const clonedContacts = cloneContacts(contacts);
	const regex = new RegExp(query, 'gi');

	const filteredQueryContacts = (query)
		? clonedContacts.filter((contact) => contact.name.match(regex))
		: clonedContacts;

	return filteredQueryContacts;
};

export default getContactsByQuery;
