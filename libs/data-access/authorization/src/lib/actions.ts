import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { RegistrationInterface } from '@ppm/common/main';

export function logIn(payload: { email: string; password: string }) {  
  return action(ActionTypes.LOG_IN, payload);
}
export function logInSuccess(payload: any) {
  return action(ActionTypes.LOG_IN_SUCCESS, payload);
}
export function logInFailed(error: any) {
  return action(ActionTypes.LOG_IN_FAILED, error);
}

export function registration(payload: RegistrationInterface) {  
  return action(ActionTypes.REGISTRATION, payload);
}
export function registrationSuccess() {
  return action(ActionTypes.REGISTRATION_SUCCESS);
}
export function registrationFailed(error: any) {
  return action(ActionTypes.REGISTRATION_FAILED, error);
}
