import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectCategoriesState = (state: ApplicationRootState) => {
  return state.categories || initialState;
};

const selectCategoryState = (state: ApplicationRootState) => {
  return state.category || initialState;
};

// Selectors
const selectCategories = () =>
  createSelector(selectCategoriesState, (subState) => {
    return subState.list || [];
  });

const selectLoading = () =>
  createSelector(selectCategoriesState, (subState) => {
    return subState.loading || false;
  });

const selectCategory = () =>
  createSelector(selectCategoryState, (subState) => {
    return subState.category || null;
  });

export { selectCategories, selectCategory, selectLoading };
