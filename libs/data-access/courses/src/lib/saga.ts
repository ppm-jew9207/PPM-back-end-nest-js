import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import {
  addCourseFailed,
  addCourseSuccess,
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
  updateFailed,
  addStudentToCourseFailed,
  removeStudentFromCourseFailed,
  filterCoursesFailed,
  filterCoursesSuccess,
} from './actions';
import {
  post,
  postFormData,
  get,
  getByQueryParams,
} from '@ppm/data-access/http-requests';
import { PrivateRoutesPath, MessagesStatus } from '@ppm/common/main';
import { snackbarActions } from '@ppm/data-access/snack-bar';

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

    yield put(getByIdSuccess({ course: result[0] }));
  } catch (error) {
    yield put(getByIdFailed(error));
  }
}

export function* getAll(search?) {
  try {
    let path = `/api/${PrivateRoutesPath.COURSES}/`;
    if (search) {
      path += `?search=${search.payload}`;
    }
    const result = yield call(get, path);
    if (!Array.isArray(result)) {
      throw new Error('Failed load courses');
    }
    yield put(getAllSuccess({ list: result }));
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
    yield put(getAllSuccess({ list: result.data }));
  } catch (error) {
    yield put(getAllFailed(error));
  }
}

export function* getAllByAuthorId(actions) {
  try {
    const mentorId = actions.payload;
    const path = `/api/${PrivateRoutesPath.COURSES}/${PrivateRoutesPath.USER}/${mentorId}`;
    const result = yield call(get, path);
    if (result && !Array.isArray(result.data)) {
      throw new Error('Failed load user courses');
    }
    yield put(getAllSuccess({ list: result.data }));
  } catch (error) {
    yield put(getAllFailed(error));
  }
}

export function* updateCourseFromList(actions: any) {
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
        yield put(smallUpdateSuccess());
      }
    } else {
      const path = `/api/${PrivateRoutesPath.COURSES}/update/${data.id}`;
      yield call(post, path, data);
      yield put(smallUpdateSuccess());
    }
    if (data.callback == 'getAll') {
      yield put(getAllAction(null));
    } else {
      yield put(getAllByAuthorAction());
    }
  } catch (error) {
    yield put(smallUpdateFailed(error));
  }
}

export function* addCourses(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.COURSES}`;
    const data = actions.payload;
    const result = yield call(post, path, data);

    if (!result.data.success) {
      throw new Error('Failed to add course. Please try again.');
    }
    yield put(addCourseSuccess());

    yield put({ type: ActionTypes.COURSE_GET_ALL_BY_AUTHOR });

    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.SUCCESS,
        message: 'The Course was created successfully.',
      })
    );
  } catch (error) {
    yield put(addCourseFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message,
      })
    );
  }
}

export function* addStudentToCourse(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}/addToCourse/${actions.payload}`;
    const result = yield call(post, path);
    if (!!result.data.errorCourseExist) {
      throw new Error(result.data.errorCourseExist);
    } else if (!!actions.payload && result) {
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'You are successfully signed to the course!',
        })
      );
    } else {
      throw new Error('Failed to sign to the course. Please try again.');
    }
  } catch (error) {
    yield put(addStudentToCourseFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message,
      })
    );
  }
}

export function* removeStudentFromCourse(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}/removeFromCourse/${actions.payload}`;
    const result = yield call(post, path);
    if (!!result.data.errorCourseExist) {
      throw new Error(result.data.errorCourseExist);
    } else if (!!actions.payload && result) {
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'You are successfully signed off from the course!',
        })
      );
    } else {
      throw new Error('Failed to sign out from the course. Please try again.');
    }
  } catch (error) {
    yield put(removeStudentFromCourseFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message,
      })
    );
  }
}

export function* filterCourses(actions) {
  try {
    const path = `/api/${PrivateRoutesPath.COURSES}/filterCourses/${actions.payload}`;
    const result = yield call(getByQueryParams, path, actions.payload);
    if (result) {
      yield put(filterCoursesSuccess(result));
    }
  } catch (error) {
    yield put(filterCoursesFailed(error));
    console.log(error);
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: 'filtravimas neivyko.',
      })
    );
  }
}

export function* coursesSaga() {
  yield takeEvery(ActionTypes.GET_ALL, getAll);
  yield takeEvery(ActionTypes.COURSE_CREATE, createCourse);
  yield takeEvery(ActionTypes.COURSE_UPDATE, updateCourse);
  yield takeEvery(ActionTypes.COURSE_REMOVE, removeCourse);
  yield takeEvery(ActionTypes.COURSE_GET_BY_ID, getCourseById);
  yield takeEvery(ActionTypes.COURSE_GET_ALL_BY_AUTHOR, getAllByAuthor);
  yield takeEvery(ActionTypes.COURSE_GET_ALL_BY_AUTHOR_ID, getAllByAuthorId);
  yield takeEvery(ActionTypes.COURSE_SMALL_UPDATE, updateCourseFromList);
  yield takeEvery(ActionTypes.COURSE_ADD, addCourses);
  yield takeEvery(ActionTypes.COURSE_ADD_STUDENT, addStudentToCourse);
  yield takeEvery(ActionTypes.COURSE_REMOVE_STUDENT, removeStudentFromCourse);
  yield takeEvery(ActionTypes.COURSE_FILTER, filterCourses);
}

export default coursesSaga;
