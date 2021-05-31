import { ApplicationRootState } from 'types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface CountryType {
  countryName: string,
  countryShortName: string,
  countryPhoneCode: number
}

export interface StateType {
  stateName: string
}

export interface CityType {
  cityName: string
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
