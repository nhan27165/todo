import { combineReducers } from 'redux'
import todos from './reducers/todos'
import animals from './reducers/animals'

export const reducer = combineReducers({
	todos,
	animals
});
