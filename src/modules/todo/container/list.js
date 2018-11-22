import List from '../component/list';
import { connect } from 'react-redux';
import { moduleName } from '../model';
import { removeTodo } from '../../../common/redux/actions/todoActions';

const mapDispatchToProps = (dispatch) => ({
	onRemove: (id) => {
		dispatch(removeTodo(id))
	}
})

const mapStateToProps = (state) => ({
		todos: state[moduleName]
	})

export default connect(mapStateToProps, mapDispatchToProps)(List);
