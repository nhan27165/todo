export function getTodos () {
	return fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(res => res.json())
}

export function getTodoById (id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
}

export function updateTodoById (data) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`,
		{
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
		})
    .then(res => res.json())
}
