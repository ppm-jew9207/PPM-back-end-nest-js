import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { LessonsState } from './types';

export function getAll() {
  return action(ActionTypes.GET_ALL);
}

export function getAllSuccess(payload: LessonsState) {
  return action(ActionTypes.GET_ALL_SUCCESS, payload);
}

export function getAllFailed(payload: LessonsState) {
  return action(ActionTypes.GET_ALL_FAILED, payload);
}

export function create(payload: LessonsState) {
  return action(ActionTypes.LESSON_CREATE, payload);
}

export function createSuccess(payload: LessonsState) {
  return action(ActionTypes.LESSON_CREATE_SUCCESS, payload);
}

export function createFailed() {
  return action(ActionTypes.LESSON_CREATE_FAILED);
}

export function update(payload: LessonsState) {
  return action(ActionTypes.LESSON_UPDATE, payload);
}

export function updateSuccess(payload: LessonsState) {
  return action(ActionTypes.LESSON_UPDATE_SUCCESS, payload);
}

export function updateFailed() {
  return action(ActionTypes.LESSON_UPDATE_FAILED);
}

export function remove(id: string) {
  return action(ActionTypes.LESSON_REMOVE, id);
}

export function removeSuccess() {
  return action(ActionTypes.LESSON_REMOVE_SUCCESS);
}

export function removeFailed() {
  return action(ActionTypes.LESSON_REMOVE_FAILED);
}

export function getById(id: string) {
  return action(ActionTypes.LESSON_GET_BY_ID, id);
}

export function getByIdSuccess(payload: LessonsState) {
  return action(ActionTypes.LESSON_GET_BY_ID_SUCCESS, payload);
}

export function getByIdFailed() {
  return action(ActionTypes.LESSON_GET_BY_ID_FAILED);
}

export function getAllByAuthor(payload: LessonsState) {
  return action(ActionTypes.LESSON_GET_ALL_BY_AUTHOR, payload);
}
