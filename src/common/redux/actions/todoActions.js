import { ADD_TODO, REMOVE_TODO, LIST_TODO, DETAIL_TODO, COMPLETE_TODO } from "../models";

export const addTodo = (id, task) => ({
	type: ADD_TODO,
	id,
	task
})

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id
})

export const listTodo = (list) => ({
	type: LIST_TODO,
	list
})

export const detailTodo = (todo) => ({
  type: DETAIL_TODO,
  todo
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})
