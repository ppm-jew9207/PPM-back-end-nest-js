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

export function* createMentor(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.MENTOR}`;
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

export function* updateMentor(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.MENTOR}/update/${data.id}`;
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

export function* removeMentor(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.MENTOR}/delete/${id}`;
    const result = yield call(post, path);
    yield result && put(removeFailed());
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getMentorById(actions) {
    try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.MENTOR}/${id}`;
    const result = yield call(get, path);
    yield result && put(getByIdFailed());
    yield put(
      getByIdSuccess({
        Mentor: {},
        loading: false,
      })
    );
  } catch (error) {
    yield put(getByIdFailed());
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.MENTOR}/`;
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
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.MENTOR_CREATE, createMentor);
  yield takeEvery(ActionTypes.MENTOR_UPDATE, updateMentor);
  yield takeEvery(ActionTypes.MENTOR_REMOVE, removeMentor);
  yield takeEvery(ActionTypes.MENTOR_GET_BY_ID, getMentorById);
}

export default mentorsSaga;
