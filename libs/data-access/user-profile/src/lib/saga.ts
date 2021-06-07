import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { getUserProfileFailed, getUserProfileSuccess, updateSuccess } from './actions';
import { get, post, postFormData } from '@ppm/data-access/http-requests';
import { MessagesStatus, PrivateRoutesPath } from '@ppm/common/main';
import { Profile } from './types';
import { snackbarActions } from '@ppm/data-access/snack-bar';

export function* getUserProfile() {
  try {
    const path = `/api/${PrivateRoutesPath.USER_PROFILES}`;
    const result = yield call(get, path);
    if (!result) {
      yield put(getUserProfileFailed());
    }

    // TODO: need to fix backend to result only object, not array
    yield put(
      getUserProfileSuccess({
        profile: result.data,
        loading: false,
      })
    );
  } catch (error) {
    yield put(getUserProfileFailed());
  }
}

export function* updateUserProfile(actions: { type: string, payload: Profile }) {
  const data = actions.payload;
  try {
    if (typeof(data.photo) !== 'string') {
      const file = data.photo[0];
      const formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      const imageResult = yield call(postFormData, path, formData);

      if (imageResult) {
        const path = `/api/${PrivateRoutesPath.USER_PROFILES}/update/${data._id}`;
        yield call(post, path, { ...data, imageUrl: imageResult.data });
        yield put(
          updateSuccess({
            loading: false,
          })
        );
      }
    } else {
      const path = `/api/${PrivateRoutesPath.USER_PROFILES}/update/${data._id}`;
      yield call(post, path, data);
      yield put(
        updateSuccess({
          loading: false,
        })
      );
    }

    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.SUCCESS,
        message: 'User profile updated'
      })
    );

    yield put({ type: ActionTypes.USER_PROFILE_GET });
    
  } catch (error) {}
}

export function* userProfileSaga() {
  yield takeEvery(ActionTypes.USER_PROFILE_GET, getUserProfile);
  yield takeEvery(ActionTypes.USER_PROFILE_UPDATE, updateUserProfile);
}

export default userProfileSaga;
