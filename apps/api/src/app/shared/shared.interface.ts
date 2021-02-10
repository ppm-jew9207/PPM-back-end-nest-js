import { Types } from 'mongoose';

export class UserRef {
  _id: Types.ObjectId;
  name: string;
  imageUrl?: string;
}

export class AdvertRef {
  _id: Types.ObjectId;
}
