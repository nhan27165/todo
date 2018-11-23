import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { logger, crashReporting } from './middleware/logging';
import mySaga from './sagas/mySaga';

// let sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(logger, crashReporting))
);

// sagaMiddleware.run(mySaga)