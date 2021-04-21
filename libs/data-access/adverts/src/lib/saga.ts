import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  addAdvertFailed,
  addAdvertSuccess,
  getAllSuccess,
  getAllFailed,
  createSuccess,
  createFailed,
  updateSuccess,
  removeSuccess,
  removeFailed,
  getByIdSuccess,
  getByIdFailed,
  smallUpdateSuccess,
  smallUpdateFailed,
  getAll as getAllAction,
  getAllByAuthor as getAllByAuthorAction,
  updateFailed
} from './actions';
import { post, postFormData, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath, MessagesStatus } from '@ppm/common/main';
import { snackbarActions } from '@ppm/data-access/snack-bar';

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
        yield put(createSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.ADVERTS}`;
      const data = actions.payload;
      yield call(post, path, data);
      yield put(createSuccess());
    }
  } catch (error) {
    yield put(createFailed(error));
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
        const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data._id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(updateSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data._id}`;
      yield call(post, path, data);
      yield put(updateSuccess());
    }
  } catch (error) {
    updateFailed(error);
  }
}

export function* removeAdvert(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.ADVERTS}/delete/${id}`;
    const result = yield call(post, path);
    if (result) {
      throw new Error('Remove advert failed');
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed(error));
  }
}

export function* getAdvertById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.ADVERTS}/${id}`;
    const result = yield call(get, path);

    if (!result) {
      throw new Error('Get by id failed');
    }

    yield put(getByIdSuccess({ advert: result[0]}));
  } catch (error) {
    yield put(getByIdFailed(error));
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.ADVERTS}/`;
    const result = yield call(get, path);
    if (!Array.isArray(result)) {
      throw new Error('Failed load adverts');
    }
    yield put(
      getAllSuccess({ list: result })
    );
  } catch (error) {
    yield put(getAllFailed(error));
  }
}

export function* getAllByAuthor() {
  try {
    const path = `/api/${PrivateRoutesPath.ADVERTS}/${PrivateRoutesPath.USER}`;
    const result = yield call(get, path);
    if (result && !Array.isArray(result.data)) {
      throw new Error('Failed load user adverts');
    }
    yield put(
      getAllSuccess({ list: result.data })
    );
  } catch (error) {
    yield put(getAllFailed(error));
  }
}

export function* updateAdvertFromList(actions : any) {
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
        yield put( smallUpdateSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.ADVERTS}/update/${data.id}`;
      yield call(post, path, data);
      yield put(
        smallUpdateSuccess()
      );
    }
    if(data.callback=="getAll") {
      yield put(getAllAction());
    } else {
      yield put(getAllByAuthorAction());
    }
  } catch (error) {
    yield put(smallUpdateFailed(error));
  }
}

export function* addAdverts(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.ADVERTS}`;
    const data = actions.payload;
    console.log(data);
    const result = yield call(post, path, data);

    

    if (!result.data.success) {
      throw new Error('Failed to add advert. Please try again.');
    } 
      yield put(addAdvertSuccess());

      yield put({type: ActionTypes.ADVERT_GET_ALL_BY_AUTHOR});

      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'The Advert was created successfully.'
        })
      );
    
  } catch (error) {
     yield put(addAdvertFailed(error));
     yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.ERROR,
          message: error.message
        })
      );
  }
}

export function* advertsSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.ADVERT_CREATE, createAdvert);
  yield takeEvery(ActionTypes.ADVERT_UPDATE, updateAdvert);
  yield takeEvery(ActionTypes.ADVERT_REMOVE, removeAdvert);
  yield takeEvery(ActionTypes.ADVERT_GET_BY_ID, getAdvertById);
  yield takeEvery(ActionTypes.ADVERT_GET_ALL_BY_AUTHOR, getAllByAuthor);
  yield takeEvery(ActionTypes.ADVERT_SMALL_UPDATE, updateAdvertFromList);
  yield takeEvery(ActionTypes.ADVERT_ADD, addAdverts);
}

export default advertsSaga;
