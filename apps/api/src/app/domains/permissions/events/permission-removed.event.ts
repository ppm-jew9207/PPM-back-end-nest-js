import { RemovePermissionPayload } from '../../../models/permissions/permissions.interface';

export class PermissionRemoved {
  constructor(public readonly permission: RemovePermissionPayload) {}
}
