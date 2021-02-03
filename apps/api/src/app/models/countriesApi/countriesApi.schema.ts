import { Schema } from 'mongoose';

export const CountriesApiSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
