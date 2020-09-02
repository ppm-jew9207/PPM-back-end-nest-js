import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  advert: null,
};

export function advertsReducer(
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
    case ActionTypes.ADVERT_CREATE:
      return {
        list: state.list,
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_CREATE_SUCCESS:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_CREATE_FAILED:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_UPDATE:
      return {
        list: state.list,
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_UPDATE_SUCCESS:
      return {
        list: state.list,
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_UPDATE_FAILED:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_REMOVE:
      return {
        list: state.list,
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_REMOVE_SUCCESS:
      return {
        list: state.list,
        advert: null,
        loading: false,
      };
    case ActionTypes.ADVERT_REMOVE_FAILED:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_GET_BY_ID:
      return {
        list: state.list,
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_GET_BY_ID_SUCCESS:
      return {
        list: state.list,
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_GET_BY_ID_FAILED:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_GET_ALL_BY_AUTHOR:
      return {
        list: state.list,
        advert: state.advert,
        loading: false,
      };
    default:
      return state;
  }
}

export default advertsReducer;
