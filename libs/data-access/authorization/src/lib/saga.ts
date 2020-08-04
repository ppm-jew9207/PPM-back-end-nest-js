import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed, registrationFailed, registrationSuccess } from './actions';
import { saveToken, removeToken } from '@ppm/data-access/local-storage';
import { PrivateRoutesPath } from '@ppm/common/main';
import { login, registration } from '@ppm/data-access/http-requests';

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
    const result = yield call(registration, actions.payload);
    

  } catch (error) {
    yield put(registrationFailed(error));
  }
}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
  yield takeLatest(ActionTypes.REGISTRATION, registrationUser);
}

export default authorizationSaga;
