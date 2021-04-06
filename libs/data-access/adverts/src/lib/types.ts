import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export class UserRef {
  _id: string;
  name: string;
  imageUrl?: string;
}
export interface AdvertType {
  _id?: string;
  title?: string;
  description?: string;
  imageUrl?: string | FileList;
  programmingLanguages?: string[];
  preRequisites?: string;
  advertImageUrl?: string | FileList;
  lessonDescription?: string;
  lessonsList?: string[];
  creator?: UserRef;
  categories?: string[];
  learnItems?: string[];
  updatedAt?: string;
  createdAt?: string;
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
