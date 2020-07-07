import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';
import { AdvertRef } from '../adverts/adverts.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
  adverts: AdvertRef[];
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface UpdatePermissionPayload {
  user: UserRef;
  role: string;
  adverts: AdvertRef[];
}

export interface PermissionRef {
  _id: string;
  role: string;
  adverts: AdvertRef[];
}

export type PermissionsViewModel = LeanPermissionsView & Document;
