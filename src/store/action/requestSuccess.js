import {REQUEST_SUCCESS} from './types';

const requestSuccess = payload => ({
	payload,
	type: REQUEST_SUCCESS
});

export default requestSuccess;