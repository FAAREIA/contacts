const cloneContacts = contacts => {
	return contacts.map(contact => {
		const contactClone = {};

		for(const [key, value] of Object.entries(contact)) {
			contactClone[key] = (Array.isArray(value)) ? value.slice() : value;
		}

		return contactClone;
	});
}

export default cloneContacts;