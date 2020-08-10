import React, { useContext, useEffect, useReducer } from 'react';
import { ContactsContext } from '../App';
import ConnectionList from '../connection/List';
import Contact from './Contact';
import ContactFilterLetter from './FilterLetter';
import initialState from '../../store/initialState/contactList';
import Loading from '../loading';
import reducer from '../../store/reducer/contactList';
import Search from '../search';
import updateContacts from '../../store/action/updateContacts';

const ContactList = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const contacts = useContext(ContactsContext);

	useEffect(() => {
		dispatch(updateContacts(contacts));
	}, [state.filterLetter]);

	const areContacts = (state.loading) ? <Loading /> : <Contact contacts={state.contacts} dispatch={dispatch} query={state.searchQuery} />;
	const isConnectionList = (state.selected) ? <ConnectionList contacts={contacts} selectedContact={state.selected} /> : <article className="empty" id="connections">No contact selected yet</article>;

	return (
		<section id="contacts">
			<nav id="nav">
				<Search dispatch={dispatch} placeholder="Search for a contact..." />
				<ContactFilterLetter currentLetter={state.filterLetter} dispatch={dispatch} />
				{areContacts}
			</nav>
			{isConnectionList}
		</section>
	);
};

export default ContactList;
