import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PermissionUpdated } from '../../../domains/permissions/events/permission-updated.event';
import { PermissionsModelService } from '../../../models/permissions/permissions.service';
import { Inject } from '@nestjs/common';

@EventsHandler(PermissionUpdated)
export class PermissionUpdatedHandler
  implements IEventHandler<PermissionUpdated> {
  @Inject() private readonly _permissionsViewService: PermissionsModelService;

  public async handle({ id, data }: PermissionUpdated) {
    this._permissionsViewService.update(id, data);
    return null;
  }
}
