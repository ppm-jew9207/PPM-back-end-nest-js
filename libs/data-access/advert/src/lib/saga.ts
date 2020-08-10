import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  createSuccess,
  createFailed,
  updateSuccess,
  updateFailed,
  removeSuccess,
  removeFailed,
  getByIdSuccess,
  getByIdFailed,
} from './actions';
import {
  getById,
  create,
  remove,
  update,
} from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createAdvert(actions) {
  try {
    yield call(create, {
      data: actions.payload,
      table: PrivateRoutesPath.ADVERTS,
    });
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
    yield call(update, {
      data: actions.payload,
      table: PrivateRoutesPath.ADVERTS,
    });
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
    const result = yield call(remove, {
      id: actions.payload,
      table: PrivateRoutesPath.ADVERTS,
    });
    if (!!result) {
      yield put(removeFailed());
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getAdvertById(actions) {
  try {
    const result = yield call(getById, {
      id: actions.payload,
      table: PrivateRoutesPath.ADVERTS,
    });
    if (!!result) {
      yield put(getByIdFailed());
    }
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

export function* advertSaga() {
  yield takeEvery(ActionTypes.ADVERT_CREATE, createAdvert);
  yield takeEvery(ActionTypes.ADVERT_UPDATE, updateAdvert);
  yield takeEvery(ActionTypes.ADVERT_REMOVE, removeAdvert);
  yield takeEvery(ActionTypes.ADVERT_GET_BY_ID, getAdvertById);
}

export default advertSaga;
