import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectAuthorizationState = (state: ApplicationRootState) => {
  return state.authorization || initialState;
};

// Selectors
const selectUser = () =>
  createSelector(selectAuthorizationState, (subState) => {
    return subState.user || null;
  });

const selectLoading = () =>
  createSelector(selectAuthorizationState, (subState) => {
    return subState.loading || false;
  });

const selectIsLogged = () =>
  createSelector(selectAuthorizationState, (subState) => {
    return subState.isLoggedIn || false;
  });

const selectRegistrationStep = () =>
  createSelector(selectAuthorizationState, (subState) => {
    return subState.registrationStep || 0;
  });

export { selectUser, selectLoading, selectIsLogged, selectRegistrationStep };
