import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { getUserProfileFailed, getUserProfileSuccess } from './actions';
import { get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* getUserProfile(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}/${id}`;
    const result = yield call(get, path);
    if (!result) {
      yield put(getUserProfileFailed());
    }
    yield put(
      getUserProfileSuccess({
        profile: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getUserProfileFailed());
  }
}

export function* userProfileSaga() {
  yield takeEvery(ActionTypes.USER_PROFILE_GET, getUserProfile);
}

export default userProfileSaga;
