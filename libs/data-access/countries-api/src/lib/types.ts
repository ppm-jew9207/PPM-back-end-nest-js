import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface CountryType {
  country_name: string,
  country_short_name: string,
  country_phone_code: number
}

export interface StateType {
  state_name: string
}

export interface CityType {
  city_name: string
}

interface CountriesApiState {
  readonly countriesList: CountryType[];
  readonly statesList: CountryType[];
  readonly citiesList: CityType[];
  readonly loading: boolean;
}

type AppActions = ActionType<typeof actions>;

type RootState = ApplicationRootState;
type ContainerState = CountriesApiState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
