import Form from '../component/form';
import { connect } from 'react-redux'
import { moduleName } from '../model'
import { addTodo, getAnimals, getSagaAnimals } from '../../../common/redux/actions/todoActions'

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (task, todos) => {
		let maxId = todos.length > 0 ? Math.max.apply(Math, todos.map(todo => todo.id)) : 0;
		dispatch(addTodo(Number(maxId) + 1, task))
	},
	onGetAnimals: () => {
		dispatch(getAnimals())
	},
	onGetSagaAnimals: () => {
		dispatch(getSagaAnimals())
	}
})

const mapStateToProps = (state) => ({
	todos: state[moduleName]
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
