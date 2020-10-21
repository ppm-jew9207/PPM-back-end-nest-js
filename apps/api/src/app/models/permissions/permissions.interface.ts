import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';
import { AdvertsViewModel } from '../adverts/adverts.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
  adverts: AdvertsViewModel[];
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface UpdatePermissionPayload {
  user: UserRef;
  role: string;
  adverts: AdvertsViewModel[];
}

export interface PermissionRef {
  _id: string;
  role: string;
  adverts: AdvertsViewModel[];
}

export type PermissionsViewModel = LeanPermissionsView & Document;
