const animals = (state = [], action) => {
	let newState = {};
	switch(action.type) {
		case 'SAGA_FETCH_SUCCEEDED':
		case 'GET_ANIMALS':
			newState = [
				...state,
				...action.list
			];
			break;
		default:
			newState = state;
	}
	return newState;
}

export default animals;