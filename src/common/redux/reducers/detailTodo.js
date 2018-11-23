import { DETAIL_TODO } from "../models";

const detailTodo = (state = {}, action) => {
	let newState = {};
	switch(action.type) {
		case DETAIL_TODO:
			newState = action.todo;
			break;
		default:
			newState = state;
	}
	return newState;
}

export default detailTodo;