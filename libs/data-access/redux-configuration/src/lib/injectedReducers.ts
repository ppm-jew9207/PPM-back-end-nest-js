import { authorizeReducer } from '@ppm/data-access/authorization';
import { advertsReducer } from '@ppm/data-access/adverts';

export const allReducers = {
  authorization: authorizeReducer,
  adverts: advertsReducer,
};
