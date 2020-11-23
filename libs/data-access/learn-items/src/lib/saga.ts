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

export function* createLearnItem(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.LEARN_ITEMS}`;
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

export function* updateLearnItem(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.LEARN_ITEMS}/update/${data.id}`;
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

export function* removeLearnItem(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.LEARN_ITEMS}/delete/${id}`;
    const result = yield call(post, path);
    yield result && put(removeFailed());
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getLearnItemById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.LEARN_ITEMS}/${id}`;
    const result = yield call(get, path);
    yield result && put(getByIdFailed());

    yield put(
      getByIdSuccess({
        learnItem: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getByIdFailed());
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.LEARN_ITEMS}/`;
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

export function* learnItemsSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.LEARN_ITEM_CREATE, createLearnItem);
  yield takeEvery(ActionTypes.LEARN_ITEM_UPDATE, updateLearnItem);
  yield takeEvery(ActionTypes.LEARN_ITEM_REMOVE, removeLearnItem);
  yield takeEvery(ActionTypes.LEARN_ITEM_GET_BY_ID, getLearnItemById);
}

export default learnItemsSaga;
