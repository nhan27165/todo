import React  from 'react';
import Grid from '../../../common/component/grid'
import { Link } from 'react-router-dom'

const List = (props) => {
  const { todos, onRemove, onGetTodo } = props;
	return (
		<div>
			<Grid
			list={todos}
			display={(item, ids) => ([
				{ render: <Link key={`${ids}-${Math.random()}`} to={`/todo/${item.id}`}>{`${item.id}/ ` || '--'}</Link> },
				{ render: <span key={`${ids}-${Math.random()}`}>{item.title || '--'}</span> },
				{ render: <button key={`${ids}-${Math.random()}`} onClick={(event) => {onRemove(item.id);event.preventDefault();}}>---REMOVE----</button> }
			])}
			/>
		</div>
	);
};

export default List;
