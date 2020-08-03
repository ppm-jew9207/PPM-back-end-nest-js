import { all, fork } from 'redux-saga/effects';
import { authorizationSaga } from '@ppm/data-access/authorization';
import { advertsListSaga } from '@ppm/data-access/adverts-list';

export default function* rootSaga() {
  yield all([fork(authorizationSaga), fork(advertsListSaga)]);
}
