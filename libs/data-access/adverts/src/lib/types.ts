import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AdvertType {
  title: string;
  description: string;
}

interface AdvertsState {
  readonly advert?: AdvertType;
  readonly list: AdvertType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = AdvertsState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
