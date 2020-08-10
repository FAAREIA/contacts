import React, { useEffect } from 'react';
import getContactsByQuery from '../../store/selector/getContactsByQuery';
import initiatePagination from '../../store/action/initiatePagination';
import Pagination from '../pagination';
import usePagination from '../../hooks/usePagination';
import UserConnection from '../user/Connection';

const Connection = ({ contacts, parentRef, query }) => {
	const filteredQueryContacts = getContactsByQuery(contacts, query);

	const [state, setState] = usePagination(initiatePagination({ itemsPerPage: 20, totalItems: filteredQueryContacts.length }));

	const filteredContacts = filteredQueryContacts.map((contact) => <li key={contact.id}><UserConnection data={contact} /></li>);

	useEffect(() => {
		parentRef.scrollTop = 0;
	});

	useEffect(() => {
		setState(1);
	}, [contacts, query]);

	return (
		<>
			<ol className="connection-list">{filteredContacts.slice(state.offset, state.offset + state.itemsPerPage)}</ol>
			<Pagination state={state} setState={setState} />
		</>
	);
};

export default Connection;
