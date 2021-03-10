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
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createLesson(actions) {
  const data = actions.payload;

  try {
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

export function* updateLesson(actions) {
  const data = actions.payload;
  try {
    if (data.lessonImage.length) {
      const file = data.lessonImage[0];
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
      yield call(post, path, data);
      yield put(
        updateSuccess({
          loading: false,
        })
      );
    }
  } catch (error) {}
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
