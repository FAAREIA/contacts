import useCreateRequest from './useCreateRequest';

const useFetchRequest = (endpoint, parameters = {}) => {
	const controller = new AbortController();
	const { signal } = controller;

	const properties = { signal };
	const request = useCreateRequest({ endpoint, parameters, properties });

	const fetchRequest = async ({ timeout = 1800 } = {}) => {
		const abort = setTimeout(() => controller.abort(), timeout);
		const response = await fetch(request);

		clearTimeout(abort);
		return response;
	};

	return fetchRequest;
};

export default useFetchRequest;
