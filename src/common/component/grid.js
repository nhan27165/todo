import React, { Component } from 'react';

class Grid extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return true
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('will')
	}
	componentDidUpdate(nextProps, nextState) {
		console.log('did')
	}

	render () {console.log('a')
		const { list, display } = this.props;

		return list.map((item, ids) => {
			let displayItems = display(item);
			return <div key={ids}>{displayItems.map(displayItem => displayItem.render)}</div>;
		})
	}
}

export default Grid;
