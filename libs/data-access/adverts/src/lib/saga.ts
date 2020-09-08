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
import { post, postFormData, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createAdvert(actions) {
  const data = actions.payload;
  try {
    if (data.advertImage.length) {
      const file = data.advertImage[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.ADVERTS}`;
        const data = actions.payload;
        yield call(post, path, data);
        yield put(
          createSuccess({
            loading: false,
          })
        );
      }
    } else {
      const path = `/api/${PrivateRoutesPath.ADVERTS}`;
      const data = actions.payload;
      yield call(post, path, data);
      yield put(
        createSuccess({
          loading: false,
        })
      );
    }
  } catch (error) {
    yield put(createFailed());
  }
}

export function* updateAdvert(actions) {
  const data = actions.payload;
  try {
    if (data.advertImage.length) {
      const file = data.advertImage[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data.id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(
          updateSuccess({
            loading: false,
          })
        );
      }
    } else {
      const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data.id}`;
      yield call(post, path, data);
      yield put(
        updateSuccess({
          loading: false,
        })
      );
    }
  } catch (error) {}
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

export function* getAllByAuthor(actions) {
  try {
    const id = actions.payload;
    // todo: include authorID, for now: all adverts are shown
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
  yield takeEvery(ActionTypes.ADVERT_GET_ALL_BY_AUTHOR, getAllByAuthor);
}

export default advertsSaga;
