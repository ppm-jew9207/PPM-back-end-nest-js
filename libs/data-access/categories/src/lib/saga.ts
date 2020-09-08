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

export function* createCategory(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.CATEGORIES}`;
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

export function* updateCategory(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/update/${data.id}`;
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

export function* removeCategory(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/delete/${id}`;
    const result = yield call(post, path);
    yield result && put(removeFailed());
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getCategoryById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/${id}`;
    const result = yield call(get, path);
    yield result && put(getByIdFailed());

    yield put(
      getByIdSuccess({
        category: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getByIdFailed());
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/`;
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

export function* categoriesSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.CATEGORY_CREATE, createCategory);
  yield takeEvery(ActionTypes.CATEGORY_UPDATE, updateCategory);
  yield takeEvery(ActionTypes.CATEGORY_REMOVE, removeCategory);
  yield takeEvery(ActionTypes.CATEGORY_GET_BY_ID, getCategoryById);
}

export default categoriesSaga;
