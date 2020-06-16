import { Schema } from 'mongoose';

export const StudentSchema = new Schema({
  type: String,
  description: String,
  firstName: String,
  lastName: String,
  photo: String,
  fieldOfProfession: String,
  company: String,
  categories: String,
  city: String,
  phone: String,
  email: String,
},
);
