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
    const result = [];
    yield !Array.isArray(result) && put(getCountriesFailed(null));
    yield put(
      getCountriesSuccess({
        countriesList: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getCountriesFailed(null));
  }
}

export function* getStates(actions) {
  try {
    const countryName = actions.payload;
    const path = `/api/${PrivateRoutesPath.COUNTRIES}/${countryName}/${PrivateRoutesPath.STATES}/`;
    const result = [];
    yield !Array.isArray(result) && put(getStatesFailed(null));

    yield put(
      getStatesSuccess({
        statesList: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getStatesFailed(null));
  }
}

export function* getCities(actions) {
  try {
    const stateName = actions.payload;
    const path = `/api/${PrivateRoutesPath.COUNTRIES}/${stateName}/${PrivateRoutesPath.CITIES}/`;
    const result = [];
    yield !Array.isArray(result) && put(getCitiesFailed(null));

    yield put(
      getCitiesSuccess({
        citiesList: result,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getCitiesFailed(null));
  }
}

export function* countriesApiSaga() {
  yield takeEvery(ActionTypes.GET_COUNTRIES, getCountries);
  yield takeEvery(ActionTypes.GET_STATES, getStates);
  yield takeEvery(ActionTypes.GET_CITIES, getCities);
}

export default countriesApiSaga;
