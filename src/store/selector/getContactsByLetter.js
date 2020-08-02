import cloneContacts from '../action/cloneContacts';

const getContactsByLetter = (contacts, letter) => {
	const clonedContacts = cloneContacts(contacts);
	const filteredContacts = (letter) ? clonedContacts.filter(e => e.name.charAt(0).toUpperCase() === letter) : clonedContacts;

	return filteredContacts;
}

export default getContactsByLetter;