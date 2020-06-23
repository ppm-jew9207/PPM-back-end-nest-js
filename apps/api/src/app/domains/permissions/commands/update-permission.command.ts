import { PermissionsAggregate } from '../permissions.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PermissionUpdated } from '../events/permission-updated.event';
import { UpdatePermissionPayloadDto } from '../../../models/permissions/dtos/update-permission.dto';

export class UpdatePermission {
  constructor(public data: UpdatePermissionPayloadDto) {}
}

@CommandHandler(UpdatePermission)
export class UpdatePermissionHandler
  implements ICommandHandler<UpdatePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: UpdatePermission) {
    const aggregate = new PermissionsAggregate();
    aggregate.apply(new PermissionUpdated(data));

    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
