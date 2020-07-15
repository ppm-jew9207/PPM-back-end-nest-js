import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed } from './actions';
import { Authorize } from '../../../redux-configuration/src/lib/until/api';

export function* logIn(actions){
  try{
    const result = yield call( Authorize.login, actions.payload);
    if(!result.success){
      yield put(logInFailed(null));
    }

    yield put(logInSuccess({
      user: result.data.user,
      isLoggedIn: true,
      loading: false,
    }));

  }catch (error) {
    yield put(logInFailed(error));
  }

}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
}

export default authorizationSaga;
