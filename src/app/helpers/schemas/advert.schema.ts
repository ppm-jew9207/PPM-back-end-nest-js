import * as mongoose from 'mongoose';

export const AdvertSchema = new mongoose.Schema({
  title: String,
  description: String
});
