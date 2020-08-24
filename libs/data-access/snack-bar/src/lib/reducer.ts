import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { VariantType, useSnackbar } from 'notistack';

export const initialState: ContainerState = {
  message: '',
  type: null
};

export function snackBarReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_MESSAGE:
      return {
        message: action.payload.message,
        type: action.payload.variant
      };
    case ActionTypes.SET_MESSAGE_SUCCESS:
      return {
        message: null,
        type: null
      };
    default:
      return state;
  }
}

export default snackBarReducer;
