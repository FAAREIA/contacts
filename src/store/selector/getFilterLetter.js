import initialState from '../initialState/contactList';

const getFilterLetter = (currentLetter, newLetter) => {
	if (currentLetter === newLetter) return initialState.filterLetter;
	return newLetter;
}

export default getFilterLetter;