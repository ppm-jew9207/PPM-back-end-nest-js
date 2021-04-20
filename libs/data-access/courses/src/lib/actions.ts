import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { CourseType } from './types';

export function getAll() {
  return action(ActionTypes.GET_ALL);
}

export function getAllSuccess(payload: { list: CourseType[] }) {
  return action(ActionTypes.GET_ALL_SUCCESS, payload);
}

export function getAllFailed(error: Error) {
  return action(ActionTypes.GET_ALL_FAILED, error);
}

export function create(course: CourseType) {
  return action(ActionTypes.ADVERT_CREATE, course);
}

export function createSuccess() {
  return action(ActionTypes.ADVERT_CREATE_SUCCESS);
}

export function createFailed(error: Error) {
  return action(ActionTypes.ADVERT_CREATE_FAILED, error);
}

export function update(course: CourseType) {
  return action(ActionTypes.ADVERT_UPDATE, course);
}

export function updateSuccess() {
  return action(ActionTypes.ADVERT_UPDATE_SUCCESS);
}

export function updateFailed(error: Error) {
  return action(ActionTypes.ADVERT_UPDATE_FAILED, error);
}

export function remove(id: string) {
  return action(ActionTypes.ADVERT_REMOVE, id);
}

export function removeSuccess() {
  return action(ActionTypes.ADVERT_REMOVE_SUCCESS);
}

export function removeFailed(error: Error) {
  return action(ActionTypes.ADVERT_REMOVE_FAILED, error);
}

export function getById(id: string) {
  return action(ActionTypes.ADVERT_GET_BY_ID, id);
}

export function getByIdSuccess(payload: { course: CourseType }) {
  return action(ActionTypes.ADVERT_GET_BY_ID_SUCCESS, payload);
}

export function getByIdFailed(error: Error) {
  return action(ActionTypes.ADVERT_GET_BY_ID_FAILED, error);
}

export function getAllByAuthor() {
  return action(ActionTypes.ADVERT_GET_ALL_BY_AUTHOR);
}

export function smallUpdate(course: CourseType) {
  return action(ActionTypes.ADVERT_SMALL_UPDATE, course);
}

export function smallUpdateSuccess() {
  return action(ActionTypes.ADVERT_SMALL_UPDATE_SUCCESS);
}

export function smallUpdateFailed(error: Error) {
  return action(ActionTypes.ADVERT_SMALL_UPDATE_FAILED, error);
}