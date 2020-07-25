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

export { selectUser, selectLoading, selectIsLogged };
