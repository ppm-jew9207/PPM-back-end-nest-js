import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  mentors: [],
  loading: false
};

export function mentorsReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.MENTORS_GET_ALL:
      return {
        mentors: [],
        loading: true,
      };
    case ActionTypes.MENTORS_GET_ALL_SUCCESS:
      return {
        mentors: action.payload,
        loading: false,
      };
    case ActionTypes.MENTORS_GET_ALL_FAILED:
      return {
        mentors: state.mentors,
        loading: false,
      };
    default:
      return state;
  }
}

export default mentorsReducer;
