import React from 'react';
import PaginationItem from './Item';


const setPages = (currentPage, totalPages) => {
	const delta = 2;
	const next = currentPage + delta + 1;
	const previous = currentPage - delta;
	const result = Array.from({length: totalPages}, (v, n) => n + 1).filter(n => n >= previous && n < next);

	return result;
}

const Pagination = ({state, setState}) => {
	const {currentPage, totalPages} = state;

	const pageItems = [];
	const pages = setPages(currentPage, totalPages);

	for (let i = 0; i < pages.length; i++) {
		const number = pages[i];
		pageItems.push(<PaginationItem currentPage={currentPage} key={number} onClickAction={setState} onClickArgs={number} text={number} />);
	};

	const isNextDisabled = (currentPage !== totalPages && totalPages > 1) ? false : true;
	const isPreviousDisabled = (currentPage !== 1) ? false : true;

	if (totalPages === 1) return null;
	return (
		<ol className="pagination">
			<PaginationItem disabled={isPreviousDisabled} key="prev" onClickAction={setState} onClickArgs={currentPage - 1} text="Prev" />
			{pageItems}
			<PaginationItem disabled={isNextDisabled} key="next" onClickAction={setState} onClickArgs={currentPage + 1} text="Next" />
		</ol>
	);
}

export default Pagination;