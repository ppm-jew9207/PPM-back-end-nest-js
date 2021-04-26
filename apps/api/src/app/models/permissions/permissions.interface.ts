import { Document } from 'mongoose';
import { UserRef } from '../../shared/shared.interface';
import { CoursePayload } from '../courses/courses.interface';

export interface LeanPermissionsView {
  _id: string;
  user: UserRef;
  role: string;
  courses: CoursePayload[];
}

export interface CreatePermissionPayload {
  user: UserRef;
  role: string;
}

export interface UpdatePermissionPayload {
  user: UserRef;
  role: string;
  courses: CoursePayload[];
}

export interface PermissionRef {
  _id: string;
  role: string;
  courses: CoursePayload[];
}

export type PermissionsViewModel = LeanPermissionsView & Document;
