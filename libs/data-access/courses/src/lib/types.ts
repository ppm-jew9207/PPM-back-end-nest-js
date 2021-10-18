import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export class UserRef {
  _id: string;
  name: string;
  imageUrl?: string;
}
export interface CourseType {
  _id?: string;
  title?: string;
  description?: string;
  imageUrl?: string | FileList;
  programmingLanguages?: string[];
  preRequisites?: string;
  courseImageUrl?: string | FileList;
  lessonDescription?: string;
  lessonsList?: string[];
  creator?: UserRef;
  categories?: string[];
  learnItems?: string[];
  updatedAt?: string;
  createdAt?: string;
}
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
