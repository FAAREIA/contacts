import { UPDATE_SELECTED_CONTACT } from './types';

const updateSelectedContact = (contact) => ({
	contact,
	type: UPDATE_SELECTED_CONTACT,
});

export default updateSelectedContact;
