import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum LikeEnum {
  Like = 'like',
  Share = 'share',
}
export interface LikeType {
  course_id: string;
  user_id: string;
  type: LikeEnum;
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
