import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed } from './actions';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {login, saveToken, removeToken} from '@ppm/api-requests/authorization';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* logIn(actions){
  try{    
    const result = yield call( login, actions.payload);
    console.log(result);
    
    if(!result.success){
      yield put(logInFailed(null));
      removeToken();
    }

    yield put(logInSuccess({
      user: result.data.user,
      isLoggedIn: true,
      loading: false,
    }));

    saveToken(result.data.token.token);
    window.location.href = `/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`;


  }catch (error) {
    yield put(logInFailed(error));
  }

}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
}

export default authorizationSaga;
