import React  from 'react';

const Form = (props) => {
	let task = ''
	const { onSubmit, todos } = props;

	return (
		<div>
      <form onSubmit={(e) => {
        onSubmit(task, todos);
        e.preventDefault();
      }}>
        <label>
          Task:
          <input type='text' placeholder='To do task' onChange={(e) => {task = e.target.value;}}/>
        </label>
        <input type='submit' value='Add task' />
      </form>
      <br/>
		</div>
	);
}

export default Form;
