const useCreateRequest = ({ endpoint, parameters, properties }) => {
	const params = Object.entries(parameters);
	const url = new URL(endpoint);

	params.forEach(([key, value]) => url.searchParams.set(key, value));

	return new Request(url.href, properties);
};

export default useCreateRequest;
