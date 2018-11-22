export function getListAminal () {
	return fetch(`https://dog.ceo/api/breeds/list`)
		.then(res => res.json())
		.then(data => data.message)
}