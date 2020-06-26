import { CreatePermissionPayload } from '../../../models/permissions/permissions.interface';
export class PermissionCreated {
  constructor(
    public readonly id: string,
    public readonly data: CreatePermissionPayload
  ) {}
}
