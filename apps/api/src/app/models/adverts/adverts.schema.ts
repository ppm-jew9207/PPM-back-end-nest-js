import { Schema } from 'mongoose';

export const AdvertsSchema = new Schema({
    title: {
      type: String,
      max: 100,
      required: true
    },
    description: {
      type: String
    },
  },
);
