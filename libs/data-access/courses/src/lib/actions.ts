import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import {
  CourseType,
  QueryData,
  UpdateCourseRatingPayload,
} from '@ppm/common/main';

export function getAll(payload: QueryData) {
  return action(ActionTypes.GET_ALL, payload);
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

export function getAllByAuthorId(id: String) {
  return action(ActionTypes.COURSE_GET_ALL_BY_AUTHOR_ID, id);
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

export function addCourse(course: CourseType) {
  return action(ActionTypes.COURSE_ADD, course);
}

export function addCourseSuccess() {
  return action(ActionTypes.COURSE_ADD_SUCCESS);
}

export function addCourseFailed(error: Error) {
  return action(ActionTypes.COURSE_ADD_FAILED, error);
}

export function addStudentToCourse(courseId: string) {
  return action(ActionTypes.COURSE_ADD_STUDENT, courseId);
}

export function addStudentToCourseSuccess() {
  return action(ActionTypes.COURSE_ADD_STUDENT_SUCCESS);
}

export function addStudentToCourseFailed(error: Error) {
  return action(ActionTypes.COURSE_ADD_STUDENT_FAILED, error);
}

export function removeStudentFromCourse(courseId: string) {
  return action(ActionTypes.COURSE_REMOVE_STUDENT, courseId);
}

export function removeStudentFromCourseSuccess() {
  return action(ActionTypes.COURSE_REMOVE_STUDENT_SUCCESS);
}

export function removeStudentFromCourseFailed(error: Error) {
  return action(ActionTypes.COURSE_REMOVE_STUDENT_FAILED, error);
}

export function loadAllCount(payload: QueryData) {
  return action(ActionTypes.COURSE_ALL_COUNT, payload);
}

export function loadAllCountSuccess(result: number) {
  return action(ActionTypes.COURSE_ALL_COUNT_SUCCESS, result);
}

export function loadAllCountFailed(error: Error) {
  return action(ActionTypes.COURSE_ALL_COUNT_FAILED, error);
}

export function loadMore(payload: QueryData) {
  return action(ActionTypes.COURSE_LOAD_MORE, payload);
}

export function loadMoreSuccess(payload: { list: CourseType[] }) {
  return action(ActionTypes.COURSE_LOAD_MORE_SUCCESS, payload);
}

export function loadMoreFailed(error: Error) {
  return action(ActionTypes.COURSE_LOAD_MORE_FAILED, error);
}

export function updateCourseRating(payload: {
  ratingPayload: UpdateCourseRatingPayload;
  params: QueryData;
}) {
  return action(ActionTypes.COURSE_UPDATE_RATING, payload);
}

export function updateCourseRatingFailed(error: Error) {
  return action(ActionTypes.COURSE_UPDATE_RATING_FAILED, error);
}
