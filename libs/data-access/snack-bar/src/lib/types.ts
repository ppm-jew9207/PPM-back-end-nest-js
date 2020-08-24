import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { VariantType } from 'notistack';
/* --- STATE --- */

interface InventorTestState {
  readonly message: string;
  readonly type: VariantType;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = InventorTestState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
