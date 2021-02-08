import { ActionTypes } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  countriesList: [],
  statesList: [],
  citiesList: [],
  loading: false,
};

export function countriesApiReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_COUNTRIES:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: true,
      };
    case ActionTypes.GET_COUNTRIES_SUCCESS:
      return {
        countriesList: action.payload.countriesList,
        statesList: [],
        citiesList: [],
        loading: false,
      };
    case ActionTypes.GET_COUNTRIES_FAILED:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: false,
      };
    case ActionTypes.GET_STATES:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: true,
      };
    case ActionTypes.GET_STATES_SUCCESS:
      return {
        countriesList: state.countriesList,
        statesList: action.payload.statesList,
        citiesList: [], 
        loading: false,
      };
    case ActionTypes.GET_STATES_FAILED:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: false,
      };
    case ActionTypes.GET_CITIES:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: true,
      };
    case ActionTypes.GET_CITIES_SUCCESS:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: action.payload.citiesList,
        loading: false,
      };
    case ActionTypes.GET_CITIES_FAILED:
      return {
        countriesList: state.countriesList,
        statesList: state.statesList,
        citiesList: state.citiesList,
        loading: false,
        };
    default:
      return state;
  }
}

export default countriesApiReducer;
