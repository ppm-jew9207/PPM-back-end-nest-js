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

interface SocialLink {
  icon: string;
  link: string;
  color: string;
}
export interface Profile {
  _id?: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string | ArrayBuffer | FileList;
  fieldOfProfession: string;
  company?: string;
  categories: string[];
  state: string;
  city: string;
  country: string;
  phone: string;
  website: string;
  type: string;
  socialLinks: SocialLink[];
  coursesIds?: string[];
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
