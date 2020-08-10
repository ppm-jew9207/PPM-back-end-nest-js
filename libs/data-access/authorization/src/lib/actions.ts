import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { RegistrationInterface } from '@ppm/common/main';

export function logIn(payload: { email: string; password: string }) {  
  return action(ActionTypes.LOG_IN, payload);
}
export function logInSuccess(payload: {
  user: any;
  isLoggedIn: boolean;
  loading: boolean;
}) {
  return action(ActionTypes.LOG_IN_SUCCESS, payload);
}
export function logInFailed(error: any) {
  return action(ActionTypes.LOG_IN_FAILED, error);
}

export function registration(payload: RegistrationInterface) {  
  return action(ActionTypes.REGISTRATION, payload);
}
export function registrationSuccess(step: number) {
  return action(ActionTypes.REGISTRATION_SUCCESS, step);
}
export function registrationFailed(error: any) {
  return action(ActionTypes.REGISTRATION_FAILED, error);
}

export function verification(code: string) {  
  return action(ActionTypes.VERIFICATION, code);
}
export function verificationSuccess(step: number) {
  return action(ActionTypes.VERIFICATION_SUCCESS, step);
}
export function verificationFailed(error: any) {
  return action(ActionTypes.VERIFICATION_FAILED, error);
}
