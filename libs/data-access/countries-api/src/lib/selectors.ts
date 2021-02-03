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

const selectCountries = () =>
  createSelector(selectCountriesState, (subState) => {
    return subState.countriesList || [];
  });


const selectStates = () =>
createSelector(selectStatesState, (subState) => {
  return subState.statesList || [];
});

const selectCities = () =>
createSelector(selectCitiesState, (subState) => {
  return subState.citiesList || [];
});

const selectLoading = () =>
  createSelector(selectCountriesState, (subState) => {
    return subState.loading || false;
  });

export { selectCountries, selectStates, selectCities, selectLoading }; 
