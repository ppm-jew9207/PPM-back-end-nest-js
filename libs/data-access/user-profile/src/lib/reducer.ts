import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  profile: null,
  loading: false,
  loadedProfile: null
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
        loadedProfile: state.loadedProfile
      };
    case ActionTypes.USER_PROFILE_GET_SUCCESS:
      return {
        profile: action.payload.profile,
        loading: false,
        loadedProfile: state.loadedProfile
      };
    case ActionTypes.USER_PROFILE_GET_FAILED:
      return {
        profile: state.profile,
        loading: false,
        loadedProfile: state.loadedProfile
      };
      case ActionTypes.OTHER_USER_PROFILE_GET:
        return {
          profile: state.profile,
          loading: true,
          loadedProfile: state.loadedProfile
        };
      case ActionTypes.OTHER_USER_PROFILE_GET_SUCCESS:
        return {
          profile: state.profile,
          loading: false,
          loadedProfile: action.payload.loadedProfile
        };
      case ActionTypes.OTHER_USER_PROFILE_GET_FAILED:
        return {
          profile: state.profile,
          loading: false,
          loadedProfile: state.loadedProfile
        };
    default:
      return state;
  }
}

export default userProfileReducer;
