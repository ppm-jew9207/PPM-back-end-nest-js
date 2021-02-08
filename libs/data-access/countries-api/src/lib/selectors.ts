import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectCountriesState = (state: ApplicationRootState) => {
  return state.countriesApi || [];
};

const selectCountries = () =>
  createSelector(selectCountriesState, (subState) => {
    return subState.countriesList || [];
  });


const selectStates = () =>
createSelector(selectCountriesState, (subState) => {
  return subState.statesList || [];
});

const selectCities = () =>
createSelector(selectCountriesState, (subState) => {
  return subState.citiesList || [];
});

const selectLoading = () =>
  createSelector(selectCountriesState, (subState) => {
    return subState.loading || false;
  });

export { selectCountries, selectStates, selectCities, selectLoading }; 
