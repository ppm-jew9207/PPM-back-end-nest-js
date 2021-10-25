import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  course: null,
  count: 0,
};

export function coursesReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      return {
        list: state.list,
        loading: true,
        count: state.count,
      };
    case ActionTypes.GET_ALL_SUCCESS:
      return {
        list: action.payload.list,
        loading: false,
        count: state.count,
      };
    case ActionTypes.GET_ALL_FAILED:
      return {
        list: state.list,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_CREATE:
      return {
        list: state.list,
        course: action.payload,
        loading: true,
        count: state.count,
      };
    case ActionTypes.COURSE_CREATE_SUCCESS:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_CREATE_FAILED:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };

    case ActionTypes.COURSE_UPDATE:
      return {
        list: state.list,
        course: action.payload,
        loading: true,
        count: state.count,
      };
    case ActionTypes.COURSE_UPDATE_SUCCESS:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_UPDATE_FAILED:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };

    case ActionTypes.COURSE_REMOVE:
      return {
        list: state.list,
        course: state.course,
        loading: true,
        count: state.count,
      };
    case ActionTypes.COURSE_REMOVE_SUCCESS:
      return {
        list: state.list,
        course: null,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_REMOVE_FAILED:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };

    case ActionTypes.COURSE_GET_BY_ID:
      return {
        list: state.list,
        course: state.course,
        loading: true,
        count: state.count,
      };
    case ActionTypes.COURSE_GET_BY_ID_SUCCESS:
      return {
        list: state.list,
        course: action.payload.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_GET_BY_ID_FAILED:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_GET_ALL_BY_AUTHOR:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_GET_ALL_BY_AUTHOR_ID:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_SMALL_UPDATE:
      return {
        list: state.list,
        course: action.payload,
        loading: true,
        count: state.count,
      };
    case ActionTypes.COURSE_SMALL_UPDATE_SUCCESS:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_SMALL_UPDATE_FAILED:
      return {
        list: state.list,
        course: state.course,
        loading: false,
        count: state.count,
      };
    case ActionTypes.COURSE_ALL_COUNT:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.COURSE_ALL_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload,
      };
    case ActionTypes.COURSE_ALL_COUNT_FAILED:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.COURSE_LOAD_MORE:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.COURSE_LOAD_MORE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.concat(action.payload.list),
      };
    case ActionTypes.COURSE_LOAD_MORE_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default coursesReducer;
