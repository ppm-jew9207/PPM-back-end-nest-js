import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  photo: String,
  name: String,
  surname: String,
  city: String,
  phone: String,
  description: String
});
