import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export function create(payload: any) {
  return action(ActionTypes.CREATE, payload);
}

export function createSuccess(payload: any) {
  return action(ActionTypes.CREATE_SUCCESS, payload);
}

export function createFailed() {
  return action(ActionTypes.CREATE_FAILED);
}

export function update(payload: any) {
  return action(ActionTypes.UPDATE, payload);
}

export function updateSuccess(payload: any) {
  return action(ActionTypes.UPDATE_SUCCESS, payload);
}

export function updateFailed() {
  return action(ActionTypes.UPDATE_FAILED);
}

export function remove(id: string) {
  return action(ActionTypes.REMOVE, id);
}

export function removeSuccess() {
  return action(ActionTypes.REMOVE_SUCCESS);
}

export function removeFailed() {
  return action(ActionTypes.REMOVE_FAILED);
}

export function getById(id: string) {
  return action(ActionTypes.GET_BY_ID, id);
}

export function getByIdSuccess(payload: any) {
  return action(ActionTypes.GET_BY_ID_SUCCESS, payload);
}

export function getByIdFailed() {
  return action(ActionTypes.GET_BY_ID_FAILED);
}
