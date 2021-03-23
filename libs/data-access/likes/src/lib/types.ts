import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface LikeType {
  advert_id: string;
  user_id: string;
  type: string;
}

interface LikesState {
  readonly likes: LikeType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = LikesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
