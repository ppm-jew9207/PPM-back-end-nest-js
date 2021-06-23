import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectUserProfileState = (state: ApplicationRootState) => {
  return state.userProfile || initialState;
};

// Selectors
const selectUserProfile = () =>
  createSelector(selectUserProfileState, (subState) => {
    return subState.profile || null;
  });

const selectOtherProfile = () =>
  createSelector(selectUserProfileState, (subState) => {
    return subState.loadedProfile || null;
  });

const selectLoading = () =>
  createSelector(selectUserProfileState, (subState) => {
    return subState.loading || false;
  });

export { selectUserProfile, selectLoading, selectOtherProfile };
