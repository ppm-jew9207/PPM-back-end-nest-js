import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectMentorsState = (state: ApplicationRootState) => {
  return state.mentors || initialState;
};

// Selectors
const selectMentors = () =>
  createSelector(selectMentorsState, (subState) => {
    return subState.mentors || [];
  });

const selectLoading = () =>
  createSelector(selectMentorsState, (subState) => {
    return subState.loading || false;
  });

export { selectMentors, selectLoading };
