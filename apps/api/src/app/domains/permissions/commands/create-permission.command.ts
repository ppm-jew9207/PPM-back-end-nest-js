import { PermissionsAggregate } from '../permissions.aggregate';
import { Types } from 'mongoose';
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreatePermissionPayloadDto } from '../../../models/permissions/dtos/create-permission.dto';
import { Inject, BadRequestException } from '@nestjs/common';
import { PermissionCreated } from '../events/permission-created.event';
import { User } from '../../../models/users/user.interface';
import { CreatePermissionPayload } from '../../../models/permissions/permissions.interface';
import { UsersService } from '../../../models/users/users.service';

export class CreatePermission {
  constructor(public data: CreatePermissionPayloadDto, public user: User) {}
}
@CommandHandler(CreatePermission)
export class CreatePermissionHandler
  implements ICommandHandler<CreatePermission> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _usersService: UsersService;

  async execute({ data, user }: CreatePermission) {
    const userFromDB = await this._usersService.getById(user._id.toHexString());
    if (!userFromDB) {
      throw new BadRequestException(`This user doesn't exist`);
    }

    if (!data.role) {
      throw new BadRequestException('Role is required!');
    }

    const permissionData: CreatePermissionPayload = {
      ...data,
      user: { _id: userFromDB._id, name: userFromDB.userName },
    };
    const aggregate = new PermissionsAggregate();
    const id = new Types.ObjectId().toHexString();
    aggregate.apply(new PermissionCreated(id, permissionData));
    const permission = this._publisher.mergeObjectContext(aggregate);
    permission.commit();

    return null;
  }
}
