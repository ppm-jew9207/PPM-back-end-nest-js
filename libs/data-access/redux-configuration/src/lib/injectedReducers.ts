import { authorizeReducer, forgotPasswordReducer } from '@ppm/data-access/authorization';
import { advertsReducer } from '@ppm/data-access/adverts';
import { lessonsReducer } from '@ppm/data-access/lessons';
import { categoriesReducer } from '@ppm/data-access/categories';
import { snackBarReducer } from '@ppm/data-access/snack-bar';
import { userProfileReducer } from '@ppm/data-access/user-profile';

export const allReducers = {
  authorization: authorizeReducer,
  adverts: advertsReducer,
  lessons: lessonsReducer,
  categories: categoriesReducer,
  snackBar: snackBarReducer,
  userProfile: userProfileReducer,
  forgotPassword: forgotPasswordReducer,
};
