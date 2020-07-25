import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {history} from './until/history';


export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });
  
  return rootReducer;
}