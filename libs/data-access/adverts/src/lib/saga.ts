import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  getAllSuccess,
  getAllFailed,
  createSuccess,
  createFailed,
  updateSuccess,
  updateFailed,
  removeSuccess,
  removeFailed,
  getByIdSuccess,
  getByIdFailed,
} from './actions';
import { post, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createAdvert(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.ADVERTS}`;
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

export function* updateAdvert(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data.id}`;
    yield call(post, path, data);
    yield put(
      updateSuccess({
        loading: false,
      })
    );
  } catch (error) {
    yield put(updateFailed());
  }
}

export function* removeAdvert(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.ADVERTS}/delete/${id}`;
    const result = yield call(post, path);
    if (result) {
      yield put(removeFailed());
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getAdvertById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.ADVERTS}/${id}`;
    const result = yield call(get, path);

    yield result && put(getByIdFailed());

    yield put(
      getByIdSuccess({
        advert: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getByIdFailed());
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.ADVERTS}/`;
    const result = yield call(get, path);
    if (!Array.isArray(result)) {
      yield put(getAllFailed(null));
    }
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

export function* advertsSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.ADVERT_CREATE, createAdvert);
  yield takeEvery(ActionTypes.ADVERT_UPDATE, updateAdvert);
  yield takeEvery(ActionTypes.ADVERT_REMOVE, removeAdvert);
  yield takeEvery(ActionTypes.ADVERT_GET_BY_ID, getAdvertById);
}

export default advertsSaga;
