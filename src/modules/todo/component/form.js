import React, { Component } from 'react';

class Form extends Component {
	constructor (props) {
		super (props)
		
		this.state = { task: '' }
	}

	inputTodoTask = (event) => {
		this.setState({ task: event.target.value })
	}
	
	submitData = (event) => {
		const { onSubmit, todos } = this.props;
		const { task } = this.state;
		
		onSubmit(task, todos);
		this.setState({ task: '' });
		event.preventDefault();
	}
	
	onGetAnimals = (event) => {
		const { onGetAnimals } = this.props;
		onGetAnimals()
		event.preventDefault()
	}
	
	onGetSagaAnimals = (event) => {
		const { onGetSagaAnimals } = this.props;
		onGetSagaAnimals()
		event.preventDefault()
	}
	
	render () {
		const { task } = this.state;

		return (
			<form onSubmit={this.submitData}>
				<label>
					Task: 
					<input type='text' placeholder='To do task' value={task} onChange={this.inputTodoTask}/>
				</label>
				<input type='submit' value='Add task' />
				<input type='button' value='Get animals' onClick={this.onGetAnimals} />
				<input type='button' value='Get Saga animals' onClick={this.onGetSagaAnimals} />
			</form>
		);
	}
}

export default Form;
