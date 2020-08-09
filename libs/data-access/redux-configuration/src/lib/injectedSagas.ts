import { all, fork } from 'redux-saga/effects';
import { authorizationSaga } from '@ppm/data-access/authorization';
import { advertsListSaga } from '@ppm/data-access/adverts-list';
import { advertSaga } from '@ppm/data-access/advert';

export default function* rootSaga() {
  yield all([fork(authorizationSaga), fork(advertsListSaga), fork(advertSaga)]);
}
