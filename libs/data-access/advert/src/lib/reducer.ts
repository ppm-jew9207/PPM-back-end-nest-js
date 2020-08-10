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
    case ActionTypes.ADVERT_CREATE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_CREATE_SUCCESS:
      return {
        advert: state.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_CREATE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_UPDATE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_UPDATE_SUCCESS:
      return {
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_UPDATE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_REMOVE:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_REMOVE_SUCCESS:
      return {
        advert: null,
        loading: false,
      };
    case ActionTypes.ADVERT_REMOVE_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };

    case ActionTypes.ADVERT_GET_BY_ID:
      return {
        advert: state.advert,
        loading: true,
      };
    case ActionTypes.ADVERT_GET_BY_ID_SUCCESS:
      return {
        advert: action.payload.advert,
        loading: false,
      };
    case ActionTypes.ADVERT_GET_BY_ID_FAILED:
      return {
        advert: state.advert,
        loading: false,
      };
    default:
      return state;
  }
}

export default advertReducer;
