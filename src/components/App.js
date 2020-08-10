import React, { createContext, useEffect, useReducer } from 'react';
import ContactList from './contact/List';
import fetchContacts from '../store/action/fetchContacts';
import initialState from '../store/initialState/app';
import Loading from './loading';
import reducer from '../store/reducer/app';
import useFetchRequest from '../hooks/useFetchRequest';

const jsonContacts = `${process.env.REACT_APP_LOCATION_ORIGIN}${process.env.REACT_APP_CONTACT_ENDPOINT}`;

const ContactsContext = createContext();

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const requests = {
		contacts: useFetchRequest(jsonContacts),
	};

	useEffect(() => {
		fetchContacts({ url: requests.contacts, dispatch });
	}, []);

	if (state.loading) return <Loading />;
	return (
		<ContactsContext.Provider value={state.contacts}>
			<ContactList />
		</ContactsContext.Provider>
	);
};

export { ContactsContext };
export default App;
