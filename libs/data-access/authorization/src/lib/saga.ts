import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { logInSuccess, logInFailed, registrationFailed, registrationSuccess, verificationSuccess, verificationFailed, forgotPasswordSuccess } from './actions';
import { saveToken, removeToken, setRegistrationStep, setRegistrationEmail } from '@ppm/data-access/local-storage';
import { PrivateRoutesPath, ApiResponse, MessagesStatus } from '@ppm/common/main';
import { get, login, post, registration, verify } from '@ppm/data-access/http-requests';
import { snackbarActions } from '@ppm/data-access/snack-bar';

export function* logIn(actions) {
  try {
    const result = yield call(login, actions.payload);

    if (!result.success) {
      yield put(logInFailed(null));
      removeToken();
      throw new Error('Login failed, check your credentials!');
    }
    saveToken(result.data.token.token);

    yield put(
      logInSuccess({
        user: result.data.user,
        isLoggedIn: true,
        loading: false,
      })
    );

    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.SUCCESS,
        message: 'Welcome to PPM.'
      })
    );

    window.location.href = `/${PrivateRoutesPath.USER}`;  
  } catch (error) {
    yield put(logInFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message
      })
    );
  }
}

export function* registrationUser(actions) {
  try {
    const result:ApiResponse = yield call(registration, actions.payload);    
    
    if(result && result.success === false){
      if(result.data && result.data.message === 'REGISTRATION.USER_ALREADY_REGISTERED'){
        throw new Error('This email already registered.');
      }

      yield put(registrationFailed({}));
      throw new Error('Registration failed');
    }

    yield put(
      registrationSuccess(1)
    );
    setRegistrationStep(1);
    setRegistrationEmail(actions.payload.email);


  } catch (error) {
    yield put(registrationFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message
      })
    );
  }
}

export function* verifyEmail(actions) {
  try {
    const result: ApiResponse = yield call(verify, actions.payload);    
    
    if(result && result.success === false){
      throw new Error('Verification failed, check your verification code or click `Resend verification code`');
    }

    yield put(
      verificationSuccess(2)
    );
    setRegistrationStep(2);
    
  } catch (error) {
    yield put(verificationFailed(error));
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: error.message
      })
    );
  }
}

export function* forgotPassword(actions) {
  try {
    const email = actions.payload;
    const path = `/api/${PrivateRoutesPath.AUTH}/forgot-password/${email}`;
    const result = yield call(get, path);
    
    if (result.success) {
      yield put(forgotPasswordSuccess(1));
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'Your verification code has been sent to your email. '
        })
      );
    }else{
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.ERROR,
          message: 'Request failed. Check entered data'
        })
      );
    }


  } catch (err) {
    console.log(err);
    
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: 'Reset password failed.'
      })
    );
  }
}

export function* forgotPasswordResetPassword(actions) {
  try {
    const data = actions.payload;
    const path = `/api/${PrivateRoutesPath.AUTH}/${PrivateRoutesPath.POST_RESET_PASSWORD}`;
    const result = yield call(post, path, data);
    
    if (result.success) {
      yield put(forgotPasswordSuccess(3));
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.SUCCESS,
          message: 'Your password changed'
        })
      );
    }else{
      yield put(
        snackbarActions.setMessage({
          variant: MessagesStatus.ERROR,
          message: 'Request failed, check your entered data.'
        })
      );
    }


  } catch (err) {
    console.log(err);
    
    yield put(
      snackbarActions.setMessage({
        variant: MessagesStatus.ERROR,
        message: 'Reset password failed.'
      })
    );
  }
}

export function* authorizationSaga() {
  yield takeLatest(ActionTypes.LOG_IN, logIn);
  yield takeLatest(ActionTypes.REGISTRATION, registrationUser);
  yield takeLatest(ActionTypes.VERIFICATION, verifyEmail);
  yield takeLatest(ActionTypes.FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(ActionTypes.FORGOT_PASSWORD_CHANGE, forgotPasswordResetPassword);
}

export default authorizationSaga;
