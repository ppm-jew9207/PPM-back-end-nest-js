import { Document } from 'mongoose';
export interface CountriesApiPayload {
  id?: string;
  title?: string;
  value?: string;
}

// export interface CategoryRef {
//   _id: string;
//   title: string;
//   value: string;
// }

export type CountriesApiViewModel = CountriesApiPayload & Document;
