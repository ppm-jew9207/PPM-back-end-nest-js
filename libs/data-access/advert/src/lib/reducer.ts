import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  advert: null,
  loading: false,
};

export function advertReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.CREATE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.CREATE_SUCCESS:
      return {
        advert: state.advert,
        loading: false,
      };
    case ActionTypes.CREATE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.UPDATE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.UPDATE_SUCCESS:
      return {
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.UPDATE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.REMOVE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.REMOVE_SUCCESS:
      return {
        advert: null,
        loading: false,
      };
    case ActionTypes.REMOVE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.GET_BY_ID:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.GET_BY_ID_SUCCESS:
      return {
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.GET_BY_ID_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };
    default:
      return state;
  }
}

export default advertReducer;
