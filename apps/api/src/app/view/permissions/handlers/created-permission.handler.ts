import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PermissionCreated } from "../../../domains/permissions/events/permission-created.event";
import { PermissionsModelService } from "../../../models/permissions/permissions.service";
import { Inject } from "@nestjs/common";

@EventsHandler(PermissionCreated)
export class PermissionCreatedHandler
  implements IEventHandler<PermissionCreated> {
  @Inject() private readonly _permissionsViewService: PermissionsModelService;

  public async handle({ id, data }: PermissionCreated) {
    this._permissionsViewService.create(id, data);
    return null;
  }
}
