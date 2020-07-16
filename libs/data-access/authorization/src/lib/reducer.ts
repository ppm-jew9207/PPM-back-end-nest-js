import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  user: null,
  isLoggedIn: false,
  loading: false,
};

export function authorizeReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        user: action.payload,
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
      };
    default:
      return state;
  }
}

export default authorizeReducer;
