import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  lesson: null,
};

export function lessonsReducer(
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
      return {
        list: action.payload.list,
        loading: false,
      };
    case ActionTypes.GET_ALL_FAILED:
      return {
        list: state.list,
        loading: false,
      };
    case ActionTypes.LESSON_CREATE:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: true,
      };
    case ActionTypes.LESSON_CREATE_SUCCESS:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };
    case ActionTypes.LESSON_CREATE_FAILED:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };

    case ActionTypes.LESSON_UPDATE:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: true,
      };
    case ActionTypes.LESSON_UPDATE_SUCCESS:
      return {
        list: state.list,
        lesson: action.payload.lesson,
        loading: false,
      };
    case ActionTypes.LESSON_UPDATE_FAILED:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };

    case ActionTypes.LESSON_REMOVE:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: true,
      };
    case ActionTypes.LESSON_REMOVE_SUCCESS:
      return {
        list: state.list,
        lesson: null,
        loading: false,
      };
    case ActionTypes.LESSON_REMOVE_FAILED:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };

    case ActionTypes.LESSON_GET_BY_ID:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: true,
      };
    case ActionTypes.LESSON_GET_BY_ID_SUCCESS: 
      return {
        list: state.list,
        lesson: action.payload.lesson[0],
        loading: false,
      };
    case ActionTypes.LESSON_GET_BY_ID_FAILED:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };
    case ActionTypes.LESSON_GET_ALL_BY_AUTHOR:
      return {
        list: state.list,
        lesson: state.lesson,
        loading: false,
      };
    default:
      return state;
  }
}

export default lessonsReducer;
