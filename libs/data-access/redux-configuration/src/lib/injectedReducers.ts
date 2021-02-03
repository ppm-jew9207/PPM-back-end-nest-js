import { authorizeReducer, forgotPasswordReducer } from '@ppm/data-access/authorization';
import { advertsReducer } from '@ppm/data-access/adverts';
import { lessonsReducer } from '@ppm/data-access/lessons';
import { categoriesReducer } from '@ppm/data-access/categories';
import { learnItemsReducer } from '@ppm/data-access/learn-items';
import { snackBarReducer } from '@ppm/data-access/snack-bar';
import { userProfileReducer } from '@ppm/data-access/user-profile';
import { countriesApiReducer } from '@ppm/data-access/countries-api';

export const allReducers = {
  authorization: authorizeReducer,
  adverts: advertsReducer,
  lessons: lessonsReducer,
  categories: categoriesReducer,
  learnItems: learnItemsReducer,
  snackBar: snackBarReducer,
  userProfile: userProfileReducer,
  forgotPassword: forgotPasswordReducer,
  countriesApi: countriesApiReducer
};
