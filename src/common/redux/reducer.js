import { combineReducers } from 'redux'
import todos from './reducers/todos'
import detailTodo from "./reducers/detailTodo";

export const reducer = combineReducers({
	todos,
  detailTodo
});
