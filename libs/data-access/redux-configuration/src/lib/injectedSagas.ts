import { all, fork } from 'redux-saga/effects';
import { authorizationSaga } from '@ppm/data-access/authorization';
import { advertsSaga } from '@ppm/data-access/adverts';

export default function* rootSaga() {
  yield all([fork(authorizationSaga), fork(advertsSaga)]);
}
