import React  from 'react';
import Grid from '../../../common/component/grid'
import { Link } from 'react-router-dom'

const List = (props) => {
  const { todos, onRemove, onComplete } = props;
	return (
		<div>
			<Grid
			list={todos}
			display={(item, ids) => ([
				{ render: <Link key={`${ids}-${Math.random()}`} to={`/todo/${item.id}`}>{`${item.id}/ ` || '--'}</Link> },
        { render: <b key={`${ids}-${Math.random()}`}>{item.completed ? 'true' : 'false'}{console.log(item.completed)}</b> },
				{ render: <span key={`${ids}-${Math.random()}`}>
						{item.completed && item.title && <del>item.title</del>}
            {!item.completed && item.title && item.title}
						{!item.title && '--'}
					</span> },
				{ render: <button key={`${ids}-${Math.random()}`} onClick={(event) => {onRemove(item.id);event.preventDefault();}}>REMOVE</button> },
        { render: <button key={`${ids}-${Math.random()}`} onClick={(event) => {onComplete(item.id);event.preventDefault();}}>COMPLETE</button> }
			])}
			/>
		</div>
	);
};

export default List;
