/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectSnackBarState = (state: ApplicationRootState) => {
  return state.snackBar || initialState;
};

const selectMessage = () =>
  createSelector(
    selectSnackBarState,
    substate => {
      return substate.message;
    }
  );
  
const selectType = () =>
  createSelector(
    selectSnackBarState,
    substate => {
      return substate.type;
    }
  );

export { selectMessage, selectType };
