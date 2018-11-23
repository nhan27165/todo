import React  from 'react';
import Grid from '../../../common/component/grid'
import { Link } from 'react-router-dom'

const List = (props) => {
  const { todos, onRemove, onComplete } = props;
  let no = 1;
	return (
		<div>
			<Grid
			list={todos}
			display={(item, ids) => ([
				{ render: <Link key={`${Math.random()}`} to={`/todo/${item.id}`}>{`${no++}/ ` || '--'}</Link> },
				{ render: <span key={`${Math.random()}`}>
						<del>{item.completed && item.title && item.title}</del>
            {!item.completed && item.title && item.title}
						{!item.title && '--'}
					</span> },
				{ render: <button key={`${Math.random()}`} onClick={(event) => {onRemove(item.id);event.preventDefault();}}>REMOVE</button> },
        { render: <button key={`${Math.random()}`} onClick={(event) => {onComplete(item.id);event.preventDefault();}}>COMPLETE</button> }
			])}
			/>
		</div>
	);
};

export default List;
