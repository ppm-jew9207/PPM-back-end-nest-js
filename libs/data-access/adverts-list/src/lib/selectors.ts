import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectAdvertsListState = (state: ApplicationRootState) => {
  return state.advertsList || initialState;
};

// Selectors
const selectAdverts = () =>
  createSelector(selectAdvertsListState, (subState) => {
    return subState.list || [];
  });

const selectLoading = () =>
  createSelector(selectAdvertsListState, (subState) => {
    return subState.loading || false;
  });

export { selectAdverts, selectLoading };
