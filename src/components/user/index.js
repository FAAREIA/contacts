import React from 'react';



const User = ({data}) => {
	const {avatar, description, name} = data;

	return (
		<div className="contact">
			<h2>{name}</h2>
			<img alt={name} className="image" loading="lazy" src={avatar} />
			<p className="description">{description}</p>
		</div>
	);
}

export default User;