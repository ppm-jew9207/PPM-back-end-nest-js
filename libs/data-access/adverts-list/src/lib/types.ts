import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface AdvertType {
  title: string;
  description: string;
}

interface AdvertListState {
  readonly list: Array<AdvertType>;
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = AdvertListState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
