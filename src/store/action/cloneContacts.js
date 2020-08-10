const cloneContacts = (contacts) => (
	contacts.map((contact) => {
		const contactClone = {};

		Object.entries(contact).forEach(([key, value]) => {
			contactClone[key] = (Array.isArray(value)) ? value.slice() : value;
		});

		return contactClone;
	})
);

export default cloneContacts;
