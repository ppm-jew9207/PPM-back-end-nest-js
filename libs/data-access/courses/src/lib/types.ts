import { CourseType } from '@ppm/common/main';
import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface CoursesState {
  readonly course?: CourseType;
  readonly list: CourseType[];
  readonly loading: boolean;
  readonly count: number;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = CoursesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
