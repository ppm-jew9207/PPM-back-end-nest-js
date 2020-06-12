import { Schema } from 'mongoose';
export const SettingsSchema = new Schema({
    type: {
      type: String,
      max: 100,
    },
    settings: {
      type: Schema.Types.Mixed
    },
    user: {
      type: Schema.Types.Mixed
    },
    enabled: {
      type: Boolean
    }
  },
);
