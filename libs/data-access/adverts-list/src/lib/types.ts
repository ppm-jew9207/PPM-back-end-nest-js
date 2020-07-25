import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface AdvertListState {
  readonly list: Array<any>;
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = AdvertListState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
