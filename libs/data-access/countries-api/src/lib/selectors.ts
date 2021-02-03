import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectCountriesState = (state: ApplicationRootState) => {
  return state.countriesList || [];
};

const selectStatesState = (state: ApplicationRootState) => {
  return state.statesList || [];
};

const selectCitiesState = (state: ApplicationRootState) => {
  return state.citiesList || [];
};

const selectLoading = () =>
  createSelector(selectCountriesState, (subState) => {
    return subState.loading || false;
  });

export { selectCountriesState, selectStatesState, selectCitiesState, selectLoading }; 
