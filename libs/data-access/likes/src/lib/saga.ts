import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  createSuccess,
  createFailed,
  getLikesByAdvertIdSuccess,
  getLikesByAdvertIdFailed,
  getSharesByAdvertIdFailed,
  getSharesByAdvertIdSuccess
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
    const advertId = actions.payload;
    const path = `/api/${PrivateRoutesPath.LIKES}/${PrivateRoutesPath.LIKES}/${advertId}`;
    console.log(`/api/${PrivateRoutesPath.LIKES}/${PrivateRoutesPath.LIKES}/${advertId}`);
    const result = yield call(get, path);
    console.log(result);
    yield result && put(getLikesByAdvertIdFailed());

    yield put(
      getLikesByAdvertIdSuccess({
        likes: result
      })
    );
  } catch (error) {
    yield put(getLikesByAdvertIdFailed());
  }
}

export function* getSharesById(actions) {
  try {
    const advertId = actions.payload.advertId;
    const path = `/api/${PrivateRoutesPath.LIKES}/${advertId}`;
    const result = yield call(get, path);
    yield result && put(getSharesByAdvertIdFailed());

    yield put(
      getSharesByAdvertIdSuccess({
        likes: result
      })
    );
  } catch (error) {
    yield put(getSharesByAdvertIdFailed());
  }
}

export function* likesSaga() {
  yield takeEvery(ActionTypes.LIKE_CREATE, createLike);
  yield takeEvery(ActionTypes.LIKE_GET_LIKE_BY_ADVERT_ID, getLikesById);
  yield takeEvery(ActionTypes.LIKE_GET_SHARE_BY_ADVERT_ID, getSharesById);
}

export default likesSaga;
