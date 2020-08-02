import {FILTER_LETTER} from './types';

const filterLetter = letter => ({
	letter,
	type: FILTER_LETTER
});

export default filterLetter;