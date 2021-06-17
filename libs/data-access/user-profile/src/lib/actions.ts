import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { Profile  } from '@ppm/shared/profile-form';

export function getUserProfile() {
  return action(ActionTypes.USER_PROFILE_GET);
}
export function getUserProfileSuccess(payload: any) {
  return action(ActionTypes.USER_PROFILE_GET_SUCCESS, payload);
}
export function getUserProfileFailed() {
  return action(ActionTypes.USER_PROFILE_GET_FAILED);
}

export function getOtherProfile(payload: string) {
  return action(ActionTypes.OTHER_USER_PROFILE_GET, payload);
}
export function getOtherProfileSuccess(payload: any) {
  return action(ActionTypes.OTHER_USER_PROFILE_GET_SUCCESS, payload);
}
export function getOtherProfileFailed() {
  return action(ActionTypes.OTHER_USER_PROFILE_GET_FAILED);
}

export function update(payload: Profile) {
  return action(ActionTypes.USER_PROFILE_UPDATE, payload);
}

export function updateSuccess(payload: {
  loading: boolean,
}) {
  return action(ActionTypes.USER_PROFILE_UPDATE_SUCCESS, payload);
}

export function updateFailed() {
  return action(ActionTypes.USER_PROFILE_UPDATE_FAILED);
}
