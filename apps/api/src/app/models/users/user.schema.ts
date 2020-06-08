import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    max: 100,
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  position: {
    type: String
  },
  companyCode: {
    type: String
  },
  registrationDate: {type: Date, default: Date.now},
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String
  },
  status: String,
  birthDayDate: Date,
  role: String,
  roles: [String],
  auth: {
    email : {
      valid : { type: Boolean, default: false }
    },
    facebook: {
      userid: String
    },
    gmail: {
      userid: String
    }
  },
  settings: {
  }
});