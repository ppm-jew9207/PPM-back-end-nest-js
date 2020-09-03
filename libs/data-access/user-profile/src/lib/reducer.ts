import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  profile: null,
  loading: false,
};

export function userProfileReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.USER_PROFILE_GET:
      return {
        profile: state.profile,
        loading: true,
      };
    case ActionTypes.USER_PROFILE_GET_SUCCESS:
      return {
        profile: action.payload.profile.data,
        loading: false,
      };
    case ActionTypes.USER_PROFILE_GET_FAILED:
      return {
        profile: state.profile,
        loading: false,
      };
    default:
      return state;
  }
}

export default userProfileReducer;
