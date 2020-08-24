import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectAdvertsState = (state: ApplicationRootState) => {
  return state.adverts || initialState;
};

const selectAdvertState = (state: ApplicationRootState) => {
  return state.advert || initialState;
};

// Selectors
const selectAdverts = () =>
  createSelector(selectAdvertsState, (subState) => {
    return subState.list || [];
  });

const selectLoading = () =>
  createSelector(selectAdvertsState, (subState) => {
    return subState.loading || false;
  });

const selectAdvert = () =>
  createSelector(selectAdvertState, (subState) => {
    return subState.advert || null;
  });

export { selectAdverts, selectAdvert, selectLoading };
