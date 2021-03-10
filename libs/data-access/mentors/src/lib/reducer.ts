import { ActionTypes } from './constants';
import { ContainerState, ContainerActions, MentorType } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  mentor: null,
};

export function mentorsReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      return {
        list: state.list,
        loading: true,
      };
    case ActionTypes.GET_ALL_SUCCESS:
      console.log(action);
      console.log(state);
      return {
        list: state.list,
        mentor: state.mentor,
        loading: true,
      };
    case ActionTypes.GET_ALL_FAILED:
      return {
        list: state.list,
        loading: false,
      };
    case ActionTypes.MENTOR_CREATE:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: true,
      };
    case ActionTypes.MENTOR_CREATE_SUCCESS:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: false,
      };
    case ActionTypes.MENTOR_CREATE_FAILED:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: false,
      };

    case ActionTypes.MENTOR_UPDATE:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: true,
      };
    case ActionTypes.MENTOR_UPDATE_SUCCESS:
      return {
        list: state.list,
        mentor: action.payload,
        loading: false,
      };
    case ActionTypes.MENTOR_UPDATE_FAILED:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: false,
      };

    case ActionTypes.MENTOR_REMOVE:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: true,
      };
    case ActionTypes.MENTOR_REMOVE_SUCCESS:
      return {
        list: state.list,
        mentor: null,
        loading: false,
      };
    case ActionTypes.MENTOR_REMOVE_FAILED:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: false,
      };

    case ActionTypes.MENTOR_GET_BY_ID:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: true,
      };
    case ActionTypes.MENTOR_GET_BY_ID_SUCCESS:
      return {
        list: state.list,
        mentor: action.payload,
        loading: false,
      };
    case ActionTypes.MENTOR_GET_BY_ID_FAILED:
      return {
        list: state.list,
        mentor: state.mentor,
        loading: false,
      };
    default:
      return state;
  }
}

export default mentorsReducer;
