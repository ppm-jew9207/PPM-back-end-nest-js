import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { User } from '@ppm/common/main';

/* --- STATE --- */

interface AuthState {
  readonly user?: User;
  readonly isLoggedIn?: boolean;
  readonly loading: boolean;
  readonly registrationStep?: number;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AuthState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
