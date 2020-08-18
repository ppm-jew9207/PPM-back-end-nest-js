import { authorizeReducer } from '@ppm/data-access/authorization';
import { advertsListReducer } from '@ppm/data-access/adverts-list';
import { advertReducer } from '@ppm/data-access/advert';
import { snackBarReducer } from '@ppm/data-access/snack-bar';

export const allReducers = {
  authorization: authorizeReducer,
  advertsList: advertsListReducer,
  advert: advertReducer,
  snackBar: snackBarReducer,
};
