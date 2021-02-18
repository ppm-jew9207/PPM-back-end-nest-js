import { Document } from 'mongoose';
export interface CountriesPayload {
  country_name: string,
  country_short_name: string,
  country_phone_code: number
}
export interface StatesPayload {
  state_name: string;
}
export interface CitiesPayload {
  city_name: string;
}

export type StatesApiViewModel = StatesPayload & Document;
export type CountriesApiViewModel = CountriesPayload & Document;
export type CitiesApiViewModel = CitiesPayload & Document;
