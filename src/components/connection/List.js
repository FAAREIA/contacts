import React, {useEffect, useReducer, useRef} from 'react';
import Connection from './Connection';
import initialState from '../../store/initialState/connectionList';
import reducer from '../../store/reducer/connectionList';
import Search from '../search';
import setConnections from '../../store/action/setConnections';
import User from '../user';



const ConnectionList = ({contacts, selectedContact}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const connectionsId = selectedContact.connections;
	const listRef = useRef(null);

	useEffect(() => {
		dispatch(setConnections(connectionsId, contacts));
	}, [connectionsId, contacts]);

	const connection = (state.connections) ? <Connection contacts={state.connections} parentRef={listRef.current} query={state.searchQuery} /> : null;

	return (
		<article id="connections" ref={listRef}>
			<header className="header">
				<User data={selectedContact} />
				<Search dispatch={dispatch} placeholder="Search a connection..." />
			</header>
			{connection}
		</article>
	)
}

export default ConnectionList;