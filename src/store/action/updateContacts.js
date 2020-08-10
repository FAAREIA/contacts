import { UPDATE_CONTACTS } from './types';

const updateContacts = (contacts) => ({
	contacts,
	type: UPDATE_CONTACTS,
});

export default updateContacts;
