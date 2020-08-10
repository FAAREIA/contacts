import { FILTER_LETTER } from './types';
const hola = 1;
const filterLetter = (letter) => ({
	letter,
	type: FILTER_LETTER,
});

export default filterLetter;
