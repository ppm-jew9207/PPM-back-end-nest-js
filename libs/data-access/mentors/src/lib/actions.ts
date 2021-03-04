import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { MentorType } from './types';

export function getAll() {
  return action(ActionTypes.GET_ALL);
}

export function getAllSuccess(payload:{Mentor:Array<MentorType>, loading: boolean;}) {
  return action(ActionTypes.GET_ALL_SUCCESS, payload);
}

export function getAllFailed(error: Error) {
  return action(ActionTypes.GET_ALL_FAILED, error);
}

export function create(payload: MentorType) {
  return action(ActionTypes.MENTOR_CREATE, payload);
}

export function createSuccess(payload:{loading: boolean;}) {
  return action(ActionTypes.MENTOR_CREATE_SUCCESS, payload);
}

export function createFailed(error: Error) {
  return action(ActionTypes.MENTOR_CREATE_FAILED, error);
}

export function update(payload: MentorType) {
  return action(ActionTypes.MENTOR_UPDATE, payload);
}

export function updateSuccess(payload:{loading: boolean;}) {
  return action(ActionTypes.MENTOR_UPDATE_SUCCESS, payload);
}

export function updateFailed(error: Error) {
  return action(ActionTypes.MENTOR_UPDATE_FAILED, error);
}

export function remove(id: string) {
  return action(ActionTypes.MENTOR_REMOVE, id);
}

export function removeSuccess() {
  return action(ActionTypes.MENTOR_REMOVE_SUCCESS);
}

export function removeFailed(error: Error) {
  return action(ActionTypes.MENTOR_REMOVE_FAILED, error);
}

export function getById(id: string) {
  return action(ActionTypes.MENTOR_GET_BY_ID, id);
}

export function getByIdSuccess(payload:{Mentor:MentorType, loading: boolean;}) {
  return action(ActionTypes.MENTOR_GET_BY_ID_SUCCESS, payload);
}

export function getByIdFailed(error: Error) {
  return action(ActionTypes.MENTOR_GET_BY_ID_FAILED, error);
}
