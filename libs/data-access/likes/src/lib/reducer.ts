import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  likes: [],
  loading: false
};

export function likesReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.LIKE_CREATE:
      return {
        likes: state.likes,
        loading: true
      };
    case ActionTypes.LIKE_CREATE_SUCCESS:
      return {
        likes: state.likes,
        loading: false
      };
    case ActionTypes.LIKE_CREATE_FAILED:
      return {
        likes: state.likes,
        loading: false
      };
    case ActionTypes.LIKE_GET_LIKE_BY_COURSE_ID:
      return {
        likes: state.likes,
        loading: true,
      };
    case ActionTypes.LIKE_GET_LIKE_BY_COURSE_ID_SUCCESS:
      return {
        likes: action.payload.likes,
        loading: false,
      };
    case ActionTypes.LIKE_GET_LIKE_BY_COURSE_ID_FAILED:
      return {
        likes: state.likes,
        loading: false,
      };
    default:
      return state;
  }
}

export default likesReducer;
