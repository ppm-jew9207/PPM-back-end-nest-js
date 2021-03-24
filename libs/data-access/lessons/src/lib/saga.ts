import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  getAllSuccess,
  getAllFailed,
  createSuccess,
  createFailed,
  updateSuccess,
  removeSuccess,
  removeFailed,
  getByIdSuccess,
  getByIdFailed,
} from './actions';
import { post, postFormData, get } from '@ppm/data-access/http-requests';
import { MessagesStatus, PrivateRoutesPath } from '@ppm/common/main';
import { snackbarActions } from '@ppm/data-access/snack-bar';

export function* createLesson(actions) {
  const data = actions.payload;

  try {
    if (data.resources.length) {
      data.resources = data.resources.split(/[,;\t\n]+/);
    }
    if (data.imageUrl.length) {
      const file = data.imageUrl[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.LESSONS}`;
        const data = actions.payload;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(
          createSuccess({
            loading: false,
          })
        );
      }
    } else {
      const path = `/api/${PrivateRoutesPath.LESSONS}`;
      const data = actions.payload;
      yield call(post, path, { ...data, imageUrl: '' });
      yield put(
        createSuccess({
          loading: false,
        })
      );
      yield put( {type: ActionTypes.GET_ALL }       
      );
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'The Lesson was created successfully.'
        })
      );
    }
  } catch (error) {
    yield put(createFailed());
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message
      })
    );
  }
}

export function* updateLesson(actions) {
  var data = actions.payload;
  //console.log(data.resources);
  try {
    if (data.resources.length) {
      data.resources = data.resources.split(/[,;\t\n]+/);
    }
    if (data.imageUrl.length) {
      const file = data.imageUrl[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.LESSONS}/update/${data.id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(
          updateSuccess({
            loading: false,
          })
        );
      }
    } else {
      const path = `/api/${PrivateRoutesPath.LESSONS}/update/${data.id}`;
      yield call(post, path, { ...data, imageUrl: '' });
      yield put(
        updateSuccess({
          loading: false,
        })
      );
    }
    yield put( {type: ActionTypes.GET_ALL }       
      );
    yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'The Lesson was updated successfully.'
        })
      );
  } catch (error) {
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message
      })
    );
  }
}

export function* removeLesson(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.LESSONS}/delete/${id}`;
    const result = yield call(post, path);
    if (result) {
      yield put(removeFailed());
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed());
  }
}

export function* getLessonById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.LESSONS}/${id}`;
    const result = yield call(get, path);

    if (!result) {
      yield put(getAllFailed(null));
    }
    
    yield put(
      getByIdSuccess({
        lesson: result[0],
        loading: false,
      })
    );
  } catch (error) {
    yield put(getByIdFailed());
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.LESSONS}/`;
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
    const path = `/api/${PrivateRoutesPath.LESSONS}/${PrivateRoutesPath.USER}`;
    const result = yield call(get, path);
    if (!!result && !Array.isArray(result.data)) {
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

export function* lessonsSaga() {
  yield takeLatest(ActionTypes.GET_ALL, getAll);
  yield takeLatest(ActionTypes.LESSON_CREATE, createLesson);
  yield takeLatest(ActionTypes.LESSON_UPDATE, updateLesson);
  yield takeLatest(ActionTypes.LESSON_REMOVE, removeLesson);
  yield takeLatest(ActionTypes.LESSON_GET_BY_ID, getLessonById);
  yield takeLatest(ActionTypes.LESSON_GET_ALL_BY_AUTHOR, getAllByAuthor);
}

export default lessonsSaga;
