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
  return action(ActionTypes.COURSE_CREATE, course);
}

export function createSuccess() {
  return action(ActionTypes.COURSE_CREATE_SUCCESS);
}

export function createFailed(error: Error) {
  return action(ActionTypes.COURSE_CREATE_FAILED, error);
}

export function update(course: CourseType) {
  return action(ActionTypes.COURSE_UPDATE, course);
}

export function updateSuccess() {
  return action(ActionTypes.COURSE_UPDATE_SUCCESS);
}

export function updateFailed(error: Error) {
  return action(ActionTypes.COURSE_UPDATE_FAILED, error);
}

export function remove(id: string) {
  return action(ActionTypes.COURSE_REMOVE, id);
}

export function removeSuccess() {
  return action(ActionTypes.COURSE_REMOVE_SUCCESS);
}

export function removeFailed(error: Error) {
  return action(ActionTypes.COURSE_REMOVE_FAILED, error);
}

export function getById(id: string) {
  return action(ActionTypes.COURSE_GET_BY_ID, id);
}

export function getByIdSuccess(payload: { course: CourseType }) {
  return action(ActionTypes.COURSE_GET_BY_ID_SUCCESS, payload);
}

export function getByIdFailed(error: Error) {
  return action(ActionTypes.COURSE_GET_BY_ID_FAILED, error);
}

export function getAllByAuthor() {
  return action(ActionTypes.COURSE_GET_ALL_BY_AUTHOR);
}

export function smallUpdate(course: CourseType) {
  return action(ActionTypes.COURSE_SMALL_UPDATE, course);
}

export function smallUpdateSuccess() {
  return action(ActionTypes.COURSE_SMALL_UPDATE_SUCCESS);
}

export function smallUpdateFailed(error: Error) {
  return action(ActionTypes.COURSE_SMALL_UPDATE_FAILED, error);
}

<<<<<<< HEAD
export function addCourse(course: CourseType) {
  return action(ActionTypes.COURSE_ADD, course);
}

export function addCourseSuccess() {
  return action(ActionTypes.COURSE_ADD_SUCCESS);
}

export function addCourseFailed(error: Error) {
  return action(ActionTypes.COURSE_ADD_FAILED, error);
} 
=======
export function addStudentToCourse(courseId:string) {
  return action(ActionTypes.COURSE_ADDSTUDENT, courseId);
}

export function addStudentToCourseSuccess() {
  return action(ActionTypes.COURSE_ADDSTUDENT_SUCCESS);
}

export function addStudentToCourseFailed(error: Error) {
  return action(ActionTypes.COURSE_ADDSTUDENT_FAILED, error);
}
>>>>>>> d918bed07c09aa9e27ef5cb2e901fdc389c0374f
