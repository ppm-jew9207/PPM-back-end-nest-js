import { PermissionsAggregate } from '../permissions.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreatePermissionPayloadDto } from '../../../models/permissions/dtos/create-permission.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { PermissionCreated } from '../events/permission-created.event';
import { CreatePermissionPayload } from '../../../models/permissions/permissions.interface';
import { UsersService } from '../../../models/users/users.service';

export class CreatePermission {
  constructor(public data: CreatePermissionPayloadDto) {}
}
@CommandHandler(CreatePermission)
export class CreatePermissionHandler
  implements ICommandHandler<CreatePermission> {
  @Inject() private readonly _publisher: EventPublisher;

  async execute({ data }: CreatePermission) {
    if (!data.role) {
      throw new BadRequestException('Role is required!');
    }

    console.log('suveiek role');

    const aggregate = new PermissionsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new PermissionCreated(id, data));
    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
