import { TODO_DETAIL } from "../models";

const detailTodo = (state = {}, action) => {
	let newState = {};
	switch(action.type) {
		case TODO_DETAIL:
			newState = action.todo;
			break;
		default:
			newState = state;
	}
	return newState;
}

export default detailTodo;