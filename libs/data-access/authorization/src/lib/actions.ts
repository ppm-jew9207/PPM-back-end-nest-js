import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function logIn(payload: { email: string; password: string }) {
  return action(ActionTypes.LOG_IN, payload);
}
export function logInSuccess(payload: any) {
  return action(ActionTypes.LOG_IN_SUCCESS, payload);
}
export function logInFailed(error: any) {
  return action(ActionTypes.LOG_IN_FAILED, error);
}
