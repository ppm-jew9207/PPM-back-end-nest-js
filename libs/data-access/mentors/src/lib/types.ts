import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface MentorType {
  _id: number;
  title: string;
  name: string;
}

interface MentorsState {
  readonly mentor?: MentorType;
  readonly list: MentorType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = MentorsState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
