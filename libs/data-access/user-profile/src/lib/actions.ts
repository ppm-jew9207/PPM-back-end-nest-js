import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function getUserProfile() {
  return action(ActionTypes.USER_PROFILE_GET);
}
export function getUserProfileSuccess(payload: any) {
  return action(ActionTypes.USER_PROFILE_GET_SUCCESS, payload);
}
export function getUserProfileFailed() {
  return action(ActionTypes.USER_PROFILE_GET_FAILED);
}
