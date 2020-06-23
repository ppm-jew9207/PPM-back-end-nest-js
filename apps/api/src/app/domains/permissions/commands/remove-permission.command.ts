import { PermissionsAggregate } from '../permissions.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PermissionRemoved } from '../events/permission-removed.event';
import { RemovePermissionPayloadDto } from '../../../models/permissions/dtos/remove-permission.dto';

export class RemovePermission {
  constructor(public data: RemovePermissionPayloadDto) {}
}

@CommandHandler(RemovePermission)
export class RemovePermissionHandler
  implements ICommandHandler<RemovePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: RemovePermission) {
    const aggregate = new PermissionsAggregate();
    aggregate.apply(new PermissionRemoved(data));

    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
