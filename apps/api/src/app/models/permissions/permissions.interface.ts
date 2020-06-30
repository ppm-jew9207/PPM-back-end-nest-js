import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface PermissionRef {
  _id: string;
  role: string;
}

export type PermissionsViewModel = LeanPermissionsView & Document;
