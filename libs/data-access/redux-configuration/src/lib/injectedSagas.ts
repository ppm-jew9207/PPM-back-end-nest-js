import { all, fork } from 'redux-saga/effects';
// import { authorizationSaga } from '@ppm/data-access/authorization';


export default function* rootSaga() {
  yield all([
    // fork(authorizationSaga)
  ]);
};