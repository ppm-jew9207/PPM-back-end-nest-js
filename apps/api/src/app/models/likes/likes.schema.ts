import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';

export const LikesSchema = new Schema(
  {
    course: {
      type: String,
      required: true,
      ref: ViewModels.ADVERTS_VIEW
    },
    user: {
      type: String,
      required: true,
      ref: ViewModels.USERS_VIEW
    },
    type: String

  },
  { timestamps: true }
);
