import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  createSuccess,
  createFailed,
  getLikesByCourseIdSuccess,
  getLikesByCourseIdFailed,
  getSharesByCourseIdFailed,
  getSharesByCourseIdSuccess
} from './actions';
import { post, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createLike(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.LIKES}`;
    const data = actions.payload;
    yield call(post, path, data);
    yield put(
      createSuccess({
        loading: false,
      })
    );
  } catch (error) {
    yield put(createFailed());
  }
}


export function* getLikesById(actions) {
  try {
    const courseId = actions.payload;
    const path = `/api/${PrivateRoutesPath.LIKES}/${PrivateRoutesPath.LIKES}/${courseId}`;
    const result = yield call(get, path);
    yield result && put(getLikesByCourseIdFailed());
    yield put(
      getLikesByCourseIdSuccess({
        likes: result.data
      })
    );
  } catch (error) {
    yield put(getLikesByCourseIdFailed());
  }
}

export function* getSharesById(actions) {
  try {
    const courseId = actions.payload.courseId;
    const path = `/api/${PrivateRoutesPath.LIKES}/${courseId}`;
    const result = yield call(get, path);
    yield result && put(getSharesByCourseIdFailed());

    yield put(
      getSharesByCourseIdSuccess({
        likes: result
      })
    );
  } catch (error) {
    yield put(getSharesByCourseIdFailed());
  }
}

export function* likesSaga() {
  yield takeEvery(ActionTypes.LIKE_CREATE, createLike);
  yield takeEvery(ActionTypes.LIKE_GET_LIKE_BY_COURSE_ID, getLikesById);
  yield takeEvery(ActionTypes.LIKE_GET_SHARE_BY_COURSE_ID, getSharesById);
}

export default likesSaga;
