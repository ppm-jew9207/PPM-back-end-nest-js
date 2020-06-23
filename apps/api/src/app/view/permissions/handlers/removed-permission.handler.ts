import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PermissionRemoved } from "../../../domains/permissions/events/permission-removed.event";
import { PermissionsModelService } from "../../../models/permissions/permissions.service";
import { Inject } from "@nestjs/common";

@EventsHandler(PermissionRemoved)
export class PermissionRemovedHandler
  implements IEventHandler<PermissionRemoved> {
  @Inject() private readonly _permissionsViewService: PermissionsModelService;

  public async handle(event: PermissionRemoved) {
    return this._permissionsViewService.remove(event.permission);
  }
}
