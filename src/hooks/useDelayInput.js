let timeoutInput;

const useDelayInput = ({action = e => e, dispatch, value}) => {
	clearTimeout(timeoutInput);
	timeoutInput = setTimeout(() => dispatch(action(value)), 300);
}

export default useDelayInput;