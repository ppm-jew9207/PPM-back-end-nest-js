import { PermissionsAggregate } from '../permissions.aggregate';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { PermissionRemoved } from '../events/permission-removed.event';

export class RemovePermission {
  constructor(public id: string) {}
}

@CommandHandler(RemovePermission)
export class RemovePermissionHandler
  implements ICommandHandler<RemovePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ id }: RemovePermission) {
    const aggregate = new PermissionsAggregate();
    aggregate.apply(new PermissionRemoved(id));

    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
