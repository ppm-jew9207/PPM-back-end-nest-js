import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function create(payload: any) {
  return action(ActionTypes.LIKE_CREATE, payload);
}

export function createSuccess(payload: any) {
  return action(ActionTypes.LIKE_CREATE_SUCCESS, payload);
}

export function createFailed() {
  return action(ActionTypes.LIKE_CREATE_FAILED);
}

export function getLikesByAdvertId(advertId: string) {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID, advertId);
}

export function getLikesByAdvertIdSuccess(payload: any) {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID_SUCCESS, payload);
}

export function getLikesByAdvertIdFailed() {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID_FAILED);
}

export function getSharesByAdvertId(advertId: string) {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID, advertId);
}

export function getSharesByAdvertIdSuccess(payload: any) {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID_SUCCESS, payload);
}

export function getSharesByAdvertIdFailed() {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID_FAILED);
}