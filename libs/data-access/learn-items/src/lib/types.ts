import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface LearnItemType {
  title: string;
  value: string;
}

interface LearnItemsState {
  readonly learnItem?: LearnItemType;
  readonly list: LearnItemType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = LearnItemsState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
