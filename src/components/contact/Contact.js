import React, {useEffect, useRef} from 'react';
import getContactsByQuery from '../../store/selector/getContactsByQuery';
import initiatePagination from '../../store/action/initiatePagination';
import Pagination from '../pagination';
import updateSelectedContact from '../../store/action/updateSelectedContact';
import usePagination from '../../hooks/usePagination';



const Contact = ({contacts, dispatch, query}) => {
	const filteredQueryContacts = getContactsByQuery(contacts, query);
	const listRef = useRef(null);

	const [state, setState] = usePagination(initiatePagination({totalItems: filteredQueryContacts.length}));

	const filteredContacts = filteredQueryContacts.map(contact => {
		return (
			<li key={contact.id}>
				<button onClick={() => dispatch(updateSelectedContact(contact))} type="button">{contact.name}</button>
			</li>
		);
	});

	useEffect(() => {
		listRef.current.scrollTop = 0;
	});

	useEffect(() => {
		setState(1);
	}, [contacts, query]);

	return (
		<>
		<ol className="contacts" ref={listRef}>{filteredContacts.slice(state.offset, state.offset + state.itemsPerPage)}</ol>
		<Pagination state={state} setState={setState} />
		</>
	);
}

export default Contact;