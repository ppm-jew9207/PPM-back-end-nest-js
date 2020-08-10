import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';
import { getRegistrationStep } from '@ppm/data-access/local-storage';

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
    case ActionTypes.VERIFICATION_SUCCESS:
      return {
        registrationStep: action.payload,
        loading: false
      };
    case ActionTypes.VERIFICATION:
      return {
        registrationStep: 1,
        loading: true
      };
    default:
      return state;
  }
}

export default authorizeReducer;
