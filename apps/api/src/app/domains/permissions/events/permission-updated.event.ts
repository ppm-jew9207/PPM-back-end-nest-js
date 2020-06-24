import { PermissionPayload } from '../../../models/permissions/permissions.interface';

export class PermissionUpdated {
  constructor(
    public readonly id,
    public readonly permission: PermissionPayload
  ) {}
}
