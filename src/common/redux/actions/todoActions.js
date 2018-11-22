export const addTodo = (id, task) => ({
	type: 'ADD_TODO',
	id,
	task
})

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
})

export const listTodo = (list) => ({
	type: 'LIST_TODO',
	list
})

export const getAnimals = () => {
	return dispatch => fetch(`https://dog.ceo/api/breeds/list`)
	.then(res => res.json())
	.then(data => {
		dispatch(
			{
				type: 'GET_ANIMALS',
				list: data.message
			}
		)
	})
}

export const getSagaAnimals = () => ({
	type: 'SAGA_FETCH_REQUESTED'
})
