export const crashReporting = (store) => next => action => {
	try {
		return next(action)
	} catch (error) {
		console.log('Caught an exception!', error)
		throw error
	}
}

export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

