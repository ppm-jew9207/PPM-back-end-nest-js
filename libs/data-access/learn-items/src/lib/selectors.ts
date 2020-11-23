import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectLearnItemsState = (state: ApplicationRootState) => {
  return state.learnItems || initialState;
};

const selectLearnItemState = (state: ApplicationRootState) => {
  return state.learnItem || initialState;
};

// Selectors
const selectLearnItems = () =>
  createSelector(selectLearnItemsState, (subState) => {
    return subState.list || [];
  });

const selectLoading = () =>
  createSelector(selectLearnItemsState, (subState) => {
    return subState.loading || false;
  });

const selectLearnItem = () =>
  createSelector(selectLearnItemState, (subState) => {
    return subState.learnItem || null;
  });

export { selectLearnItems, selectLearnItem, selectLoading };
