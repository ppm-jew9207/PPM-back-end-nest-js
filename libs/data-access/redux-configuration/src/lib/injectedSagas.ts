import { all, fork } from 'redux-saga/effects';
import { authorizationSaga } from '@ppm/data-access/authorization';
import { advertsSaga } from '@ppm/data-access/adverts';
import { lessonsSaga } from '@ppm/data-access/lessons';
import { categoriesSaga } from '@ppm/data-access/categories';
import { learnItemsSaga } from '@ppm/data-access/learn-items';
import { userProfileSaga } from '@ppm/data-access/user-profile';
import { countriesApiSaga } from '@ppm/data-access/countries-api';
import { likesSaga } from '@ppm/data-access/likes';

export default function* rootSaga() {
  yield all([
    fork(authorizationSaga),
    fork(advertsSaga),
    fork(lessonsSaga),
    fork(userProfileSaga),
    fork(categoriesSaga),
    fork(learnItemsSaga),
    fork(countriesApiSaga),
    fork(likesSaga)
  ]);
}
