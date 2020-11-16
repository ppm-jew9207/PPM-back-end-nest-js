import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';
import { AdvertPayload } from '../adverts/adverts.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
  adverts: AdvertPayload[];
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface UpdatePermissionPayload {
  user: UserRef;
  role: string;
  adverts: AdvertPayload[];
}

export interface PermissionRef {
  _id: string;
  role: string;
  adverts: AdvertPayload[];
}

export type PermissionsViewModel = LeanPermissionsView & Document;
