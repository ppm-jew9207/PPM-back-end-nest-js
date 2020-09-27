import { createSelector } from 'reselect';
import { initialForgotPasswordState, initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectAuthorizationState = (state: ApplicationRootState) => {
  return state.authorization || initialState;
};

const selectForgotPasswordState = (state: ApplicationRootState) => {
  
  return state.forgotPassword || initialForgotPasswordState;
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

const selectStep = () =>
  createSelector(
    selectForgotPasswordState,
    substate => {
      return substate.step;
    }
  );

const selectStepLoading = () =>
  createSelector(
    selectForgotPasswordState,
    substate => {
      return substate.loading;
    }
  );
  

export { selectUser, selectLoading, selectIsLogged, selectRegistrationStep, selectStep, selectStepLoading };
