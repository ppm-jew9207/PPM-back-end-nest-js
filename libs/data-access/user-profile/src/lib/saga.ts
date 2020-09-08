import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { getUserProfileFailed, getUserProfileSuccess } from './actions';
import { get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* getUserProfile() {
  try {
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}`;
    const result = yield call(get, path);
    if (!result) {
      yield put(getUserProfileFailed());
    }

    // TODO: need to fix backend to result only object, not array
    yield put(
      getUserProfileSuccess({
        profile: result.data[0],
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
