import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AdvertType {
  title: string;
  description: string;
}

interface AdvertState {
  readonly advert?: AdvertType;
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = AdvertState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
