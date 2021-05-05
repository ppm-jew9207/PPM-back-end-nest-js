import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  getAll, getAllSuccess, getAllFailed
} from './actions';
import { post, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* getAllMentors() {
  try {
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}/${PrivateRoutesPath.MENTORS}/`;
    const result = yield call(get, path);
    yield !Array.isArray(result) && put(getAllFailed(null));
    yield put(
      getAllSuccess({
        list: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getAllFailed(null));
  }
}


export function* mentorsSaga() {
  yield takeEvery(ActionTypes.MENTORS_GET_ALL, getAllMentors);
}

export default mentorsSaga;
