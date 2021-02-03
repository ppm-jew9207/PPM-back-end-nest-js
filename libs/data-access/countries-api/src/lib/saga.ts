import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  getCountriesSuccess,
  getCountriesFailed,
  getStatesSuccess,
  getStatesFailed,
  getCitiesSuccess,
  getCitiesFailed,
} from './actions';
import { post, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* getCountries() {
  try {
    const path = `/api/${PrivateRoutesPath.COUNTRIES}/`;
    const result = yield call(get, path);
    yield !Array.isArray(result) && put(getCountriesFailed(null));

    yield put(
      getCountriesSuccess({
        list: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getCountriesFailed(null));
  }
}

export function* getStates() {
  try {
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/`;
    const result = yield call(get, path);
    yield !Array.isArray(result) && put(getStatesFailed(null));

    yield put(
      getStatesSuccess({
        list: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getStatesFailed(null));
  }
}

export function* getCities() {
  try {
    const path = `/api/${PrivateRoutesPath.CATEGORIES}/`;
    const result = yield call(get, path);
    yield !Array.isArray(result) && put(getCitiesFailed(null));

    yield put(
      getCitiesSuccess({
        list: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getCitiesFailed(null));
  }
}

export function* categoriesSaga() {
  yield takeEvery(ActionTypes.GET_COUNTRIES, getCountries);
  yield takeEvery(ActionTypes.GET_STATES, getStates);
  yield takeEvery(ActionTypes.GET_CITIES, getCities);
}

export default categoriesSaga;
