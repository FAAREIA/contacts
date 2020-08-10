import {
	FILTER_LETTER,
	SEARCH_QUERY,
	UPDATE_CONTACTS,
	UPDATE_SELECTED_CONTACT,
} from '../action/types';
import getContactsByLetter from '../selector/getContactsByLetter';
import getFilterLetter from '../selector/getFilterLetter';
import initialState from '../initialState/contactList';

const reducer = (state, action) => {
	const currentLetter = state.filterLetter;
	const { type } = action;

	switch (type) {
		case FILTER_LETTER:
			const filterLetter = getFilterLetter(currentLetter, action.letter);
			return { ...state, filterLetter, loading: initialState.loading };
		case SEARCH_QUERY:
			return { ...state, searchQuery: action.query };
		case UPDATE_CONTACTS:
			const contacts = getContactsByLetter(action.contacts, currentLetter);
			return { ...state, contacts, loading: false };
		case UPDATE_SELECTED_CONTACT:
			return { ...state, selected: action.contact };
		default:
			return state;
	}
};

export default reducer;
