import List from '../component/list';
import { connect } from 'react-redux';
import { stateTodos } from '../model';
import { removeTodo, completeTodo } from '../../../common/redux/actions/todoActions';

const mapDispatchToProps = (dispatch) => ({
	onRemove: (id) => {
		dispatch(removeTodo(id))
	},
  onComplete: (id) => {
    dispatch(completeTodo(id))
  }
})

const mapStateToProps = (state) => ({
    todos: state[stateTodos]
  })

export default connect(mapStateToProps, mapDispatchToProps)(List);
