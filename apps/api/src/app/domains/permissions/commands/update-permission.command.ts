import { PermissionsAggregate } from '../permissions.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PermissionUpdated } from '../events/permission-updated.event';
import { UpdatePermissionPayload } from '../../../models/permissions/permissions.interface';

export class UpdatePermission {
  constructor(public id: string, public data: UpdatePermissionPayload) {}
}

@CommandHandler(UpdatePermission)
export class UpdatePermissionHandler
  implements ICommandHandler<UpdatePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id, data }: UpdatePermission) {
    const aggregate = new PermissionsAggregate();
    aggregate.apply(new PermissionUpdated(id, data));

    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
