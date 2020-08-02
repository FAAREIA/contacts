import requestContacts from './requestContacts';
import requestFailure from './requestFailure';
import requestSuccess from './requestSuccess';

const fetchContacts = ({url, dispatch, attempts = 0}) => {
	dispatch(requestContacts());

	return url()
		.then(response => {
			const code = response.status;

			if (code === 200) return response.json();
			throw new RangeError(code);
		})
		.then(json => dispatch(requestSuccess(json)))
		.catch(error => {
			attempts = attempts + 1;
																	console.log(error);
			if (attempts < 4) return fetchContacts({url, dispatch, attempts});
			return dispatch(requestFailure(error));
		});
}

export default fetchContacts;