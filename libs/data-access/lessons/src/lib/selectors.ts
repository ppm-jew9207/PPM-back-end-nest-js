import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectLessonsState = (state: ApplicationRootState) => {
  return state.lessons || initialState;
};

const selectLessonState = (state: ApplicationRootState) => {
  return state.lesson || initialState;
};

// Selectors
const selectLessons = () =>
  createSelector(selectLessonsState, (subState) => {
    return subState.list || [];
  });

const selectLoading = () =>
  createSelector(selectLessonsState, (subState) => {
    return subState.loading || false;
  });

const selectLesson = () =>
  createSelector(selectLessonsState, (subState) => {
    return subState.lesson || null;
  });

export { selectLessons, selectLesson, selectLoading };
