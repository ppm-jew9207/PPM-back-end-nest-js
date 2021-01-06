import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  list: [],
  loading: false,
  learnItem: null,
};

export function learnItemsReducer(
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
    case ActionTypes.LEARN_ITEM_CREATE:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: true,
      };
    case ActionTypes.LEARN_ITEM_CREATE_SUCCESS:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: false,
      };
    case ActionTypes.LEARN_ITEM_CREATE_FAILED:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: false,
      };

    case ActionTypes.LEARN_ITEM_UPDATE:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: true,
      };
    case ActionTypes.LEARN_ITEM_UPDATE_SUCCESS:
      return {
        list: state.list,
        learnItem: action.payload.learnItem,
        loading: false,
      };
    case ActionTypes.LEARN_ITEM_UPDATE_FAILED:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: false,
      };

    case ActionTypes.LEARN_ITEM_REMOVE:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: true,
      };
    case ActionTypes.LEARN_ITEM_REMOVE_SUCCESS:
      return {
        list: state.list,
        learnItem: null,
        loading: false,
      };
    case ActionTypes.LEARN_ITEM_REMOVE_FAILED:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: false,
      };

    case ActionTypes.LEARN_ITEM_GET_BY_ID:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: true,
      };
    case ActionTypes.LEARN_ITEM_GET_BY_ID_SUCCESS:
      return {
        list: state.list,
        learnItem: action.payload.learnItem,
        loading: false,
      };
    case ActionTypes.LEARN_ITEM_GET_BY_ID_FAILED:
      return {
        list: state.list,
        learnItem: state.learnItem,
        loading: false,
      };
    default:
      return state;
  }
}

export default learnItemsReducer;
