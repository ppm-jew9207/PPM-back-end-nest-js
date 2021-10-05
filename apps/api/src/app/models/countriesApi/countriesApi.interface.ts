import { Document } from 'mongoose';
export interface CountriesPayload {
  countryname: string,
  countryShortName: string,
  countryPhoneCode: number
}
export interface StatesPayload {
  stateName: string;
}
export interface CitiesPayload {
  cityName: string;
}

export type StatesApiViewModel = StatesPayload & Document;
export type CountriesApiViewModel = CountriesPayload & Document;
export type CitiesApiViewModel = CitiesPayload & Document;
