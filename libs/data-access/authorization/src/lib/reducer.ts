import { ActionTypes } from './constants';
import { ContainerState, ContainerActions, ContainerForgotPasswordState } from './types';
import { getRegistrationStep, removeToken } from '@ppm/data-access/local-storage';

export const initialState: ContainerState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  registrationStep: getRegistrationStep() || 0
};

export function authorizeReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        user: null,
        isLoggedIn: false,
        loading: true,
      };
    case ActionTypes.LOG_IN_SUCCESS:
      return action.payload;
    case ActionTypes.LOG_IN_FAILED:
      return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        loading: false,
        registrationStep: getRegistrationStep()
      };
    case ActionTypes.REGISTRATION_SUCCESS:
      return {
        registrationStep: action.payload,
        loading: false
      };
    case ActionTypes.REGISTRATION:
      return {
        registrationStep: 0,
        loading: true
      };
    case ActionTypes.REGISTRATION_FAILED:
      return {
        registrationStep: 0,
        loading: false
      };
    case ActionTypes.VERIFICATION_SUCCESS:
      return {
        registrationStep: action.payload,
        loading: false
      };
    case ActionTypes.VERIFICATION:
      return {
        registrationStep: state.registrationStep,
        loading: true
      };
    case ActionTypes.VERIFICATION_FAILED:
      return {
        registrationStep: state.registrationStep,
        loading: false
      };

      case ActionTypes.LOG_OUT:
        removeToken();
        return {
          user: state.user,
          isLoggedIn: false,
          loading: false,
        };
    default:
      return state;
  }
}

export const initialForgotPasswordState: ContainerForgotPasswordState = {
  step: 0,
  loading: false,
  error: null
};

export function forgotPasswordReducer(
  state: ContainerForgotPasswordState = initialForgotPasswordState,
  action: ContainerActions
): ContainerForgotPasswordState {
  
  switch (action.type) {
    case ActionTypes.FORGOT_PASSWORD:
      return {
        step: state.step,
        loading: true,
        error: null
      };
    case ActionTypes.FORGOT_PASSWORD_SUCCESS:
      
      return {
        step: action.payload,
        loading: false,
        error: null
      };
    case ActionTypes.FORGOT_PASSWORD_FAILED:
      return {
        step: 1,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default authorizeReducer;
