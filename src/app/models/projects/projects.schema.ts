import { Schema } from 'mongoose';
import { ViewModels } from '../../helpers/constants';


export const ProjectsSchema = new Schema({
    title: {
      type: String,
      max: 100,
      required: true
    },
    code: {
      type: String,
      max: 100,
      required: true,
      unique: true
    },
    color: String,
    timeSheetKey: {
      type: String,
      max: 100,
      required: true,
      unique: true
    },
    address: {
      type: String,
    },
    description: {
      type: String
    },
    static: {
      type: Boolean,
      default: false
    },
    dateStart: {
      type: Date,
      default: Date.now
    },
    dateEnd: {
      type: Date
    },
    deadline: {
      type: Date
    },
    totalPrice: {
      type: Number
    },
    created: {
      type: Schema.Types.ObjectId,
      ref: ViewModels.USERS_VIEW
    },
    workManager: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: ViewModels.USERS_VIEW
      },
      name: String
    },
    projectManager: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: ViewModels.USERS_VIEW
      },
      name: String
    },

  },
);
