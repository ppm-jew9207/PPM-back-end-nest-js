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
    mentors: [
      { _id: { type: String, ref: ViewModels.MENTORS }, title: String },
    ],
  },
  { timestamps: true }
);
