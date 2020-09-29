import { Types } from 'mongoose';

export class UserRef {
  _id: Types.ObjectId;
  name: string;
  imageUrl: string;
}
