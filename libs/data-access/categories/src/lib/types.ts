import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface CategoryType {
  title: string;
  value: string;
}

interface CategoriesState {
  readonly category?: CategoryType;
  readonly list: CategoryType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = CategoriesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
