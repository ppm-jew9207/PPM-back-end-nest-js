import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { getAllSuccess, getAllFailed } from './actions';
import { Adverts } from '../../../redux-configuration/src/lib/until/api';

export function* getAll() {
  try {
    const result = yield call(Adverts.getAdverts);
    if (!result.data.isArray()) {
      yield put(getAllFailed(null));
    }
    yield put(
      getAllSuccess({
        list: result.data,
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
