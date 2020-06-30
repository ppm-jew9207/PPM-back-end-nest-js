import { PermissionsAggregate } from '../permissions.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PermissionUpdated } from '../events/permission-updated.event';

export class UpdatePermission {
  constructor(public id: string, public role: string) {}
}

@CommandHandler(UpdatePermission)
export class UpdatePermissionHandler
  implements ICommandHandler<UpdatePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id, role }: UpdatePermission) {
    const aggregate = new PermissionsAggregate();
    aggregate.apply(new PermissionUpdated(id, role));

    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
