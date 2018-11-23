import React, { Component } from 'react';
import Detail from '../modules/todo/container/detail';
import { connect } from 'react-redux'
import { detailTodo } from '../common/redux/actions/todoActions'
import { getTodoById } from '../common/redux/api/todos';

class TodoDetail extends Component {
	constructor (props) {
		super(props);
    const { dispatch, match: {params: { id }} } = this.props;
    getTodoById(Number(id)).then(res => {
      dispatch(detailTodo(res));
		});
	}
	
	render() {
		return (
			<div>
        <Detail />
			</div>
		);
	}
}

export default connect()(TodoDetail);
