import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { VariantType } from 'notistack';

export function setMessage(payload: { variant: VariantType; message: string }) {
  return action(ActionTypes.SET_MESSAGE, payload);
}
export function setMessageSuccess() {
  return action(ActionTypes.SET_MESSAGE_SUCCESS);
}
export function setMessageFailed(error: any) {
  return action(ActionTypes.SET_MESSAGE_SUCCESS, error);
}
