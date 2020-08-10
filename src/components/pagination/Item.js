import React from 'react';

const PaginationItem = ({
	currentPage,
	disabled = false,
	onClickAction,
	onClickArgs,
	text
}) => {
	let classes = null;

	if (currentPage === text) classes = 'active';
	else if (typeof text === 'string') classes = text.toLowerCase();

	return (
		<li key={text}>
			<button className={classes} disabled={disabled} onClick={() => onClickAction(onClickArgs)} type="button">{text}</button>
		</li>
	);
};

export default PaginationItem;
