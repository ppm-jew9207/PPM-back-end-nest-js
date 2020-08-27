import { all, fork } from 'redux-saga/effects';
import { authorizationSaga } from '@ppm/data-access/authorization';
import { advertsSaga } from '@ppm/data-access/adverts';
import { categoriesSaga } from '@ppm/data-access/categories';
import { userProfileSaga } from '@ppm/data-access/user-profile';

export default function* rootSaga() {
  yield all([
    fork(authorizationSaga),
    fork(advertsSaga),
    fork(userProfileSaga),
    fork(categoriesSaga),
  ]);
}
