import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function getAll(payload: any) {
  return action(ActionTypes.GET_ALL, payload);
}

export function getAllSuccess(payload: any) {
  return action(ActionTypes.GET_ALL_SUCCESS, payload);
}

export function getAllFailed(payload: any) {
  return action(ActionTypes.GET_ALL_FAILED, payload);
}
