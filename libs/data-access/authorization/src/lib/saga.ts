import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed, registrationFailed, registrationSuccess, verificationSuccess } from './actions';
import { saveToken, removeToken, setRegistrationStep, setRegistrationEmail } from '@ppm/data-access/local-storage';
import { PrivateRoutesPath, ApiResponse } from '@ppm/common/main';
import { login, registration, verify } from '@ppm/data-access/http-requests';

export function* logIn(actions) {
  try {
    const result = yield call(login, actions.payload);

    if (!result.success) {
      yield put(logInFailed(null));
      removeToken();
    }

    yield put(
      logInSuccess({
        user: result.data.user,
        isLoggedIn: true,
        loading: false,
      })
    );

    saveToken(result.data.token.token);
    window.location.href = `/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`;
  } catch (error) {
    yield put(logInFailed(error));
  }
}

export function* registrationUser(actions) {
  try {
    const result:ApiResponse = yield call(registration, actions.payload);    
    
    if(result && (result.success || result.data.response === 'LOGIN.EMAIL_SENDED_RECENTLY')){
      yield put(
        registrationSuccess(1)
      );
      setRegistrationStep(1);
      setRegistrationEmail(actions.payload.email);
    }


  } catch (error) {
    yield put(registrationFailed(error));
  }
}

export function* verifyEmail(actions) {
  try {
    const result:ApiResponse = yield call(verify, actions.payload);    
    
    if(result && result.success){
      yield put(
        verificationSuccess(2)
      );
      setRegistrationStep(2);
    }

  } catch (error) {
    yield put(registrationFailed(error));
  }
}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
  yield takeLatest(ActionTypes.REGISTRATION, registrationUser);
  yield takeLatest(ActionTypes.VERIFICATION, verifyEmail);
}

export default authorizationSaga;
