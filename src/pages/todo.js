import React, { Component } from 'react';
import Form from '../modules/todo/container/form';
import List from '../modules/todo/container/list';
import { connect } from 'react-redux'
import { listTodo } from '../common/redux/actions/todoActions'
import { getTodos } from "../common/redux/api/todos";

class Todo extends Component {
	constructor (props) {
		super(props);
		
		const { dispatch } = this.props
    getTodos().then(res => {
      dispatch(listTodo(res))
    });
	}
	
	render() {
		return (
			<div>
				<Form />
				<List />
			</div>
		);
	}
}

export default connect()(Todo);
