export function getTodos () {
	return fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(res => res.json())
}

export function getTodoById (id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
}
