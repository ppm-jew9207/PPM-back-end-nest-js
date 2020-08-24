import { authorizeReducer } from '@ppm/data-access/authorization';
import { advertsListReducer } from '@ppm/data-access/adverts-list';
import { advertReducer } from '@ppm/data-access/advert';
import { snackBarReducer } from '@ppm/data-access/snack-bar';
import { userProfileReducer } from '@ppm/data-access/user-profile';

export const allReducers = {
  authorization: authorizeReducer,
  advertsList: advertsListReducer,
  advert: advertReducer,
  snackBar: snackBarReducer,
  userProfile: userProfileReducer,
};
