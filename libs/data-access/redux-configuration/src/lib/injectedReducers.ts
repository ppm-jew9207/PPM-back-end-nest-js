import { authorizeReducer } from '@ppm/data-access/authorization';
import { advertsReducer } from '@ppm/data-access/adverts';
import { snackBarReducer } from '@ppm/data-access/snack-bar';
import { userProfileReducer } from '@ppm/data-access/user-profile';

export const allReducers = {
  authorization: authorizeReducer,
  adverts: advertsReducer,
  snackBar: snackBarReducer,
  userProfile: userProfileReducer,
};

