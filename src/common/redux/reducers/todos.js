const todos = (state = [], action) => {
	let newState = {};
	switch(action.type) {
		case 'ADD_TODO':
			newState = [
				...state,
				{
					id: action.id,
					task: action.task,
					completed: false
				}
			];
			break;
		case 'REMOVE_TODO':
			newState = state.filter(todo => todo.id !== action.id);
			break;
		case 'LIST_TODO':
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

export default todos;