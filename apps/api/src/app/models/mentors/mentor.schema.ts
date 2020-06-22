import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const MentorSchema = new Schema({
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
  adverts: [{_id: {type: String, ref: ViewModels.ADVERTS_VIEW}, title: String}],
},
);
