import React, { Component } from 'react';
import Grid from '../../../common/component/grid'
import { Link } from 'react-router-dom'

class List extends Component {
	removeItem = (event, id) => {
		const { onRemove } = this.props;
		
		onRemove(id);
		event.preventDefault();
	}
	
	render () {
		const { todos } = this.props

		return (
			<div>
				<Grid 
				list={todos}
				display={(item, ids) => ([ 
					{ render: <Link key={`${ids}-${Math.random()}`} to={`/todo/${item.id}`}>{`${item.id}/ ` || '--'}</Link> },
					{ render: <span key={`${ids}-${Math.random()}`}>{item.task || '--'}</span> },
					{ render: <button key={`${ids}-${Math.random()}`} onClick={(event) => {this.removeItem(event, item.id)}}>---REMOVE----</button> }
				])}
				/>
			</div>
		);
	}
}

export default List;
