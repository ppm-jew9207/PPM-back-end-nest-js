import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectCoursesState = (state: ApplicationRootState) => {
  return state.courses || initialState;
};

const selectCourseState = (state: ApplicationRootState) => {
  return state.course || initialState;
};

// Selectors
const selectCourses = () =>
  createSelector(selectCoursesState, (subState) => {
    return subState.list || [];
  });

const selectCoursesCount = () =>
  createSelector(selectCoursesState, (subState) => {
    return subState.count || [];
  });

const selectLoading = () =>
  createSelector(selectCoursesState, (subState) => {
    return subState.loading || false;
  });

const selectCourse = () =>
  createSelector(selectCoursesState, (subState) => {
    return subState.course || null;
  });

export { selectCourses, selectCourse, selectLoading, selectCoursesCount };
