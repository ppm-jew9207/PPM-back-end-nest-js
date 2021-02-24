import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

export const selectMentorsState = (state: ApplicationRootState) => {
  return state.mentors || initialState;
};

const selectMentorState = (state: ApplicationRootState) => {
  return state.mentor || initialState;
};

// Selectors
const selectMentors = () =>
  createSelector(selectMentorsState, (subState) => {
    //TODO remove it when mentors will be realized in BE
  //  return subState.list || []; 
    return [
    {
      name: 'Name1',
      value: 'Value1',
      _id: '1',
    },
    {
      name: 'Name2',
      value: 'Value2',
      _id: '2',
    },    {
      name: 'Name3',
      value: 'Value3',
      _id: '3',
    },
] || [];
  });

const selectLoading = () =>
  createSelector(selectMentorsState, (subState) => {
    return subState.loading || false;
  });

const selectMentor = () =>
  createSelector(selectMentorState, (subState) => {
    return subState.mentor || null;
  });

export { selectMentors, selectMentor, selectLoading };
