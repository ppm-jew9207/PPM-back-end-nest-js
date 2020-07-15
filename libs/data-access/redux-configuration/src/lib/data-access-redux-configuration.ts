/**
 * Create the store with dynamic reducers
 */

import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { InjectedStore, ApplicationRootState } from 'types';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './injectedSagas';
import createReducer from './reducers';

export const configureStore = (
  initialState: ApplicationRootState | {} = {},
  history: History
) => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  let enhancer = applyMiddleware(...middlewares);

  if (typeof window === 'object') {
    enhancer = composeWithDevTools(enhancer);
  }
  const store = createStore(
    createReducer(),
    initialState,
    enhancer
  ) as InjectedStore;
  sagaMiddleware.run(rootSaga);
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};

  store.replaceReducer(createReducer(store.injectedReducers));

  return store;
};
