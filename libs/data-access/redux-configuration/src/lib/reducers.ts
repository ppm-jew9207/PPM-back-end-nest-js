import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {history} from './until/history';
import { allReducers } from './injectedReducers';


export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...allReducers,
    ...injectedReducers,
  });
  
  return rootReducer;
}