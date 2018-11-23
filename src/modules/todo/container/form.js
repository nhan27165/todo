import Form from '../component/form';
import { connect } from 'react-redux'
import { stateTodos } from '../model'
import { addTodo } from '../../../common/redux/actions/todoActions'

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (task, todos) => {
		let maxId = todos.length > 0 ? Math.max.apply(Math, todos.map(todo => todo.id)) : 0;
		dispatch(addTodo(Number(maxId) + 1, task))
	}
})

const mapStateToProps = (state) => ({
	todos: state[stateTodos]
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
