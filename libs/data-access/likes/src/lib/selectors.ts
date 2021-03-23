import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectLikesState = (state: ApplicationRootState) => {
  return state.likes || initialState;
};

// Selectors
const selectLikes = () =>
  createSelector(selectLikesState, (subState) => {
    return subState.likes || [];
  });

const selectLoading = () =>
  createSelector(selectLikesState, (subState) => {
    return subState.loading || false;
  });

export { selectLikes, selectLoading };
