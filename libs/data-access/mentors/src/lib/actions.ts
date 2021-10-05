import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function getAll() {
  return action(ActionTypes.MENTORS_GET_ALL);
}

export function getAllSuccess(payload: any) {
  return action(ActionTypes.MENTORS_GET_ALL_SUCCESS, payload);
}

export function getAllFailed(payload: any) {
  return action(ActionTypes.MENTORS_GET_ALL_FAILED, payload);
}