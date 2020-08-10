import React from 'react';
import searchQuery from '../../store/action/searchQuery';
import useCleanWhitespaces from '../../hooks/useCleanWhitespaces';
import useDelayInput from '../../hooks/useDelayInput';

const Search = ({ action = searchQuery, dispatch, placeholder }) => {
	const cleanWhitespaces = useCleanWhitespaces;
	const delayInput = useDelayInput;

	const handleOnChange = (e) => {
		const value = cleanWhitespaces(e.currentTarget.value);

		return delayInput({ action, dispatch, value });
	};

	return (
		<form className="search-form">
			<input className="form-control" name="search" onChange={handleOnChange} placeholder={placeholder} type="text" />
		</form>
	);
};

export default Search;
