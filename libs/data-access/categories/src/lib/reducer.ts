import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  category: null,
};

export function categoriesReducer(
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
    case ActionTypes.CATEGORY_CREATE:
      return {
        list: state.list,
        category: state.category,
        loading: true,
      };
    case ActionTypes.CATEGORY_CREATE_SUCCESS:
      return {
        list: state.list,
        category: state.category,
        loading: false,
      };
    case ActionTypes.CATEGORY_CREATE_FAILED:
      return {
        list: state.list,
        category: state.category,
        loading: false,
      };

    case ActionTypes.CATEGORY_UPDATE:
      return {
        list: state.list,
        category: state.category,
        loading: true,
      };
    case ActionTypes.CATEGORY_UPDATE_SUCCESS:
      return {
        list: state.list,
        category: action.payload.category,
        loading: false,
      };
    case ActionTypes.CATEGORY_UPDATE_FAILED:
      return {
        list: state.list,
        category: state.category,
        loading: false,
      };

    case ActionTypes.CATEGORY_REMOVE:
      return {
        list: state.list,
        category: state.category,
        loading: true,
      };
    case ActionTypes.CATEGORY_REMOVE_SUCCESS:
      return {
        list: state.list,
        category: null,
        loading: false,
      };
    case ActionTypes.CATEGORY_REMOVE_FAILED:
      return {
        list: state.list,
        category: state.category,
        loading: false,
      };

    case ActionTypes.CATEGORY_GET_BY_ID:
      return {
        list: state.list,
        category: state.category,
        loading: true,
      };
    case ActionTypes.CATEGORY_GET_BY_ID_SUCCESS:
      return {
        list: state.list,
        category: action.payload.category,
        loading: false,
      };
    case ActionTypes.CATEGORY_GET_BY_ID_FAILED:
      return {
        list: state.list,
        category: state.category,
        loading: false,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
