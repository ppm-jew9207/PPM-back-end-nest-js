import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';
import { RegistrationInterface, ResetPasswordPayload, User } from '@ppm/common/main';

export function logIn(payload: { email: string; password: string }) {  
  return action(ActionTypes.LOG_IN, payload);
}
export function logInSuccess(payload: {
  user: User;
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
export function verificationFailed(error: Error) {
  return action(ActionTypes.VERIFICATION_FAILED, error);
}

export function forgotPassword(email: string) {
  return action(ActionTypes.FORGOT_PASSWORD, email);
}
export function forgotPasswordSuccess(step: number) {
  return action(ActionTypes.FORGOT_PASSWORD_SUCCESS, step);
}

export function forgotChangePassword(payload: ResetPasswordPayload) {
  return action(ActionTypes.FORGOT_PASSWORD_CHANGE, payload);
}
export function forgotPasswordFailed(error: any) {
  return action(ActionTypes.FORGOT_PASSWORD_FAILED, error);
}

export function logOut() {
  return action(ActionTypes.LOG_OUT);
}