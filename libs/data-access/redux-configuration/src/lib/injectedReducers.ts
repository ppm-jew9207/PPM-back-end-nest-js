import { authorizeReducer } from '@ppm/data-access/authorization';
import { advertsListReducer } from '@ppm/@ppm/data-access/adverts-list';

export const allReducers = {
  authorization: authorizeReducer,
  advertsList: advertsListReducer,
};
