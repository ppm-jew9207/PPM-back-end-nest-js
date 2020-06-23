import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
}

export interface GetPermissionPayload {
  id: string;
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface UpdatePermissionPayload extends PermissionPayload {
  id: string;
}

export interface RemovePermissionPayload {
  id: string;
}

export interface PermissionPayload {
  role: string;
}

export interface PermissionRef {
  _id: string;
  role: string;
}

export type PermissionsViewModel = LeanPermissionsView & Document;
