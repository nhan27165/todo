import React from 'react';
import Detail from '../component/detail';
import { connect } from 'react-redux'
import { stateDetailTodo } from '../model'
import { detailTodo } from '../../../common/redux/actions/todoActions'
import history from '../../../common/utility/history'

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (todo) => {
		dispatch(detailTodo(todo));
    // history.push('/');
	}
})

const mapStateToProps = (state) => {
	return {
    todo: state[stateDetailTodo]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
