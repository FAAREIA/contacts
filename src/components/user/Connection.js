import React from 'react';



const UserConnection = ({data}) => {
	const {avatar, name} = data;

	return (
		<>
			<img alt={name} className="image" loading="lazy" src={avatar} />
			<p>{name}</p>
		</>
	);
}

export default UserConnection;