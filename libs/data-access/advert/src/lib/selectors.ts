import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectAdvertState = (state: ApplicationRootState) => {
  return state.advert || initialState;
};

// Selectors
const selectAdvert = () =>
  createSelector(selectAdvertState, (subState) => {
    return subState.advert || null;
  });

const selectLoading = () =>
  createSelector(selectAdvertState, (subState) => {
    return subState.loading || false;
  });

export { selectAdvert, selectLoading };
