import React from 'react';

const Grid = (props) => {
		const { list, display } = props;

		return list.map((item, ids) => {
			let displayItems = display(item);
			return <div key={ids}>{displayItems.map(displayItem => displayItem.render)}</div>;
		})
}

export default Grid;
