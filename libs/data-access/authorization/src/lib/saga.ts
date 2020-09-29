import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed, registrationFailed, registrationSuccess, verificationSuccess, verificationFailed } from './actions';
import { saveToken, removeToken, setRegistrationStep, setRegistrationEmail } from '@ppm/data-access/local-storage';
import { PrivateRoutesPath, ApiResponse } from '@ppm/common/main';
import { login, registration, verify } from '@ppm/data-access/http-requests';
import { snackbarActions } from '@ppm/data-access/snack-bar';

export function* logIn(actions) {
  try {
    const result = yield call(login, actions.payload);

    if (!result.success) {
      yield put(logInFailed(null));
      removeToken();
      throw new Error('Login failed, check your credentials!');
    }

    yield put(
      logInSuccess({
        user: result.data.user,
        isLoggedIn: true,
        loading: false,
      })
    );

    saveToken(result.data.token.token);
    yield put(
      snackbarActions.setMessage({
        variant: 'success',
        message: 'Welcome to PPM.'
      })
    );
    window.location.href = `/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`;
  } catch (error) {
    yield put(logInFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: 'error',
        message: error.message
      })
    );
  }
}

export function* registrationUser(actions) {
  try {
    const result:ApiResponse = yield call(registration, actions.payload);    
    
    if(result && result.success === false){
      if(result.data && result.data.message === 'REGISTRATION.USER_ALREADY_REGISTERED'){
        throw new Error('This email already registered.');
      }

      yield put(registrationFailed({}));
      throw new Error('Registration failed');
    }

    yield put(
      registrationSuccess(1)
    );
    setRegistrationStep(1);
    setRegistrationEmail(actions.payload.email);


  } catch (error) {
    yield put(registrationFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: 'error',
        message: error.message
      })
    );
  }
}

export function* verifyEmail(actions) {
  try {
    const result: ApiResponse = yield call(verify, actions.payload);    
    
    if(result && result.success === false){
      throw new Error('Verification failed, check your verification code or click `Resend verification code`');
    }

    yield put(
      verificationSuccess(2)
    );
    setRegistrationStep(2);
    
  } catch (error) {
    yield put(verificationFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: 'error',
        message: error.message
      })
    );
  }
}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
  yield takeLatest(ActionTypes.REGISTRATION, registrationUser);
  yield takeLatest(ActionTypes.VERIFICATION, verifyEmail);
}

export default authorizationSaga;
