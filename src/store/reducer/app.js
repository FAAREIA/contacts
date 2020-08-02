import {REQUEST_CONTACTS, REQUEST_FAILURE, REQUEST_SUCCESS} from '../action/types';
import cloneContacts from '../action/cloneContacts';
import initialState from '../initialState/app';
import orderAlphabetically from '../action/orderAlphabetically';

const reducer = (state, action) => {
	const type = action.type;

	switch (type) {
		case REQUEST_CONTACTS:
			return initialState;
		case REQUEST_FAILURE:
			return {...state, error: action.error};
		case REQUEST_SUCCESS:
			const contacts = orderAlphabetically(cloneContacts(action.payload));
			return {contacts, loading: false};
		default:
			return state;
	}
}

export default reducer;