import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface UserProfileType {
  firstName: string;
  lastName: string;
  photo: string;
  fieldOfProfession: string;
  categories: string[];
  city: string;
}

interface UserProfileState {
  readonly profile: UserProfileType;
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = UserProfileState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
