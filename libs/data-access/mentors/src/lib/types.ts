import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export interface Mentor {
  firstName: string;
  lastName: string;
  photo: string;
  fieldOfProfession: string;
  categories: string[];
  city: string;
  socialLinks: object[];
}

interface MentorsState {
  readonly mentors: Mentor[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = MentorsState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
