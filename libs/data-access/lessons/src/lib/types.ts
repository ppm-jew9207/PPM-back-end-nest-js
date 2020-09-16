import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface LessonType {
  title: string;
  description: string;
}

interface LessonsState {
  readonly lesson?: LessonType;
  readonly list: LessonType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = LessonsState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
