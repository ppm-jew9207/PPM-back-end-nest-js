import { call, put, takeEvery, all } from 'redux-saga/effects';
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
  smallUpdateSuccess,
  smallUpdateFailed,
  getAll as getAllAction,
  getAllByAuthor as getAllByAuthorAction,
  updateFailed
} from './actions';
import { post, postFormData, get } from '@ppm/data-access/http-requests';
import { PrivateRoutesPath } from '@ppm/common/main';

export function* createCourse(actions) {
  const data = actions.payload;
  try {
    if (data.courseImage.length) {
      const file = data.courseImage[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.COURSES}`;
        const data = actions.payload;
        yield call(post, path, data);
        yield put(createSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.COURSES}`;
      const data = actions.payload;
      yield call(post, path, data);
      yield put(createSuccess());
    }
  } catch (error) {
    yield put(createFailed(error));
  }
}

export function* updateCourse(actions) {
  const data = actions.payload;
  try {
    if (data.courseImage.length) {
      const file = data.courseImage[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.COURSES}/update/${data._id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(updateSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.COURSES}/update/${data._id}`;
      yield call(post, path, data);
      yield put(updateSuccess());
    }
  } catch (error) {
    updateFailed(error);
  }
}

export function* removeCourse(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.COURSES}/delete/${id}`;
    const result = yield call(post, path);
    if (result) {
      throw new Error('Remove course failed');
    }
    yield put(removeSuccess());
  } catch (error) {
    yield put(removeFailed(error));
  }
}

export function* getCourseById(actions) {
  try {
    const id = actions.payload;
    const path = `/api/${PrivateRoutesPath.COURSES}/${id}`;
    const result = yield call(get, path);

    if (!result) {
      throw new Error('Get by id failed');
    }

    yield put(getByIdSuccess({ course: result[0]}));
  } catch (error) {
    yield put(getByIdFailed(error));
  }
}

export function* getAll() {
  try {
    const path = `/api/${PrivateRoutesPath.COURSES}/`;
    const result = yield call(get, path);
    if (!Array.isArray(result)) {
      throw new Error('Failed load courses');
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
    const path = `/api/${PrivateRoutesPath.COURSES}/${PrivateRoutesPath.USER}`;
    const result = yield call(get, path);
    if (result && !Array.isArray(result.data)) {
      throw new Error('Failed load user courses');
    }
    yield put(
      getAllSuccess({ list: result.data })
    );
  } catch (error) {
    yield put(getAllFailed(error));
  }
}

export function* updateCourseFromList(actions : any) {
  const data = actions.payload;
  try {
    if (data.courseImage.length) {
      const file = data.courseImage[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.COURSES}/update/${data.id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put( smallUpdateSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.COURSES}/update/${data.id}`;
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

export function* coursesSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.COURSE_CREATE, createCourse);
  yield takeEvery(ActionTypes.COURSE_UPDATE, updateCourse);
  yield takeEvery(ActionTypes.COURSE_REMOVE, removeCourse);
  yield takeEvery(ActionTypes.COURSE_GET_BY_ID, getCourseById);
  yield takeEvery(ActionTypes.COURSE_GET_ALL_BY_AUTHOR, getAllByAuthor);
  yield takeEvery(ActionTypes.COURSE_SMALL_UPDATE, updateCourseFromList);
}

export default coursesSaga;
