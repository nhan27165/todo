import React, { Component } from 'react';
import Form from '../modules/todo/container/form';
import List from '../modules/todo/container/list';
import { connect } from 'react-redux'
import { listTodo } from '../common/redux/actions/todoActions'

class Todo extends Component {
	constructor (props) {
		super(props);
		
		const { dispatch } = this.props
		dispatch(listTodo([
					{ id: 1, task: 'Implement form', completed: true },
					{ id: 2, task: 'Implement list', completed: true },
					{ id: 3, task: 'Implement redux', completed: true },
					{ id: 4, task: 'Implement redux middleware', completed: false }
				]))
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
