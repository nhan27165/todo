import { applyMiddleware,createStore } from 'redux';
import { reducer } from './reducer';
import { logger, crashReporting } from './middleware/logging'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas/testSaga'
import mySaga from './sagas/mySaga'

let sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger, crashReporting, thunk, sagaMiddleware)
);

sagaMiddleware.run(mySaga)
