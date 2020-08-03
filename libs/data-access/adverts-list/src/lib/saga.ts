import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { getAllSuccess, getAllFailed } from './actions';
import { getAdverts } from '@ppm/data-access/http-requests';

export function* getAll() {
  try {
    const result = yield call(getAdverts);
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

export function* advertsListSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
}

export default advertsListSaga;
