import { Schema } from 'mongoose';

export const UserProfileSchema = new Schema({
  type: String,
  description: String,
  firstName: String,
  lastName: String,
  photo: String,
  fieldOfProfession: String,
  company: String,
  categories: [String],
  city: String,
  country: String,
  state: String,
  phone: String,
  email: String,
  socialLinks: [{ link: String, icon: String, color: String }],
  website: String,
  coursesIds: [String],
});
