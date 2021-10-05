import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const PermissionsSchema = new Schema(
  {
    user: {
      _id: { type: String, ref: ViewModels.USERS_VIEW },
      name: String,
    },
    role: {
      type: String,
      max: 100,
      required: true,
    },
    courses: [
      { _id: { type: String, ref: ViewModels.COURSES_VIEW }, title: String },
    ],
  },
  { timestamps: true }
);
