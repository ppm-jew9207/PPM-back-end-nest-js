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
import { MentorType } from './types';

export function* createMentor(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.MENTOR}`;
    const data = actions.payload;
    const result: { data: MentorType } = yield call(post, path, data);
    if (!Array.isArray(result)) {
      yield put(createFailed(null));
      return;
    }
    yield put(
      createSuccess(result.data)
    );
  } catch (error) {
    yield put(createFailed(error));
  }
}

export function* updateMentor(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.MENTOR}/update/${data.id}`;
    const result: { data: MentorType } = yield call(post, path, data);
    if (!Array.isArray(result)) {
      yield put(updateFailed(null));
      return;
    }
    yield put(
      updateSuccess(result.data)
    );
  } catch (error) {
    yield put(updateFailed(error));
  }
}

export function* removeMentor(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.MENTOR}/delete/${id}`;
    const result: { data: MentorType } = yield call(post, path);
    if (!Array.isArray(result)) {
      put(removeFailed(null));
      return;
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed(error));
  }
}

export function* getMentorById(actions) {
    try {
      const id = actions.payload;
      const path = `/api/${PrivateRoutesPath.MENTOR}/${id}`;
      const result:{data : MentorType}  = yield call(get, path);
      if (!Array.isArray(result)) {
        put(getByIdFailed(null));
        return;
      }
      yield put(
      getByIdSuccess(result.data)
    );
  } catch (error) {
    yield put(getByIdFailed(error));
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.MENTOR}/`;
    const result:{data : MentorType}  = yield call(get, path);
    if (!Array.isArray(result)) {
      put(getAllFailed(null));
      return;
    }  
    yield put(
      getAllSuccess(result.data)
    );
  } catch (error) {
    yield put(getAllFailed(error));
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
