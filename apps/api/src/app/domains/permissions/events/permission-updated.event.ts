import { UpdatePermissionPayload } from '../../../models/permissions/permissions.interface';

export class PermissionUpdated {
  constructor(public readonly permission: UpdatePermissionPayload) {}
}
