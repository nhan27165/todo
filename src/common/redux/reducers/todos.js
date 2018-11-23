import {ADD_TODO, REMOVE_TODO, LIST_TODO, COMPLETE_TODO} from "../models";

const todos = (state = [], action) => {
	let newState = {};
	switch(action.type) {
		case ADD_TODO:
			newState = [
				...state,
				{
					id: action.id,
					title: action.task,
					completed: false
				}
			];
			break;
		case REMOVE_TODO:
			newState = state.filter(todo => todo.id !== action.id);
			break;
		case LIST_TODO:
			newState = [
				...state,
				...action.list
			];
			break;
    case COMPLETE_TODO:
      newState = state;
    	for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.id) {
          newState[i].completed = true;
          break;
        }
			}
      break;
		default:
			newState = state;
	}
	return newState;
}

export default todos;