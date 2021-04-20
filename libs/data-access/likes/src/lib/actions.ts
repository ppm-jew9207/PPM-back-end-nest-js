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

export function getLikesByCourseId(courseId: string) {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID, courseId);
}

export function getLikesByCourseIdSuccess(payload: any) {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID_SUCCESS, payload);
}

export function getLikesByCourseIdFailed() {
  return action(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID_FAILED);
}

export function getSharesByCourseId(courseId: string) {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID, courseId);
}

export function getSharesByCourseIdSuccess(payload: any) {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID_SUCCESS, payload);
}

export function getSharesByCourseIdFailed() {
  return action(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID_FAILED);
}