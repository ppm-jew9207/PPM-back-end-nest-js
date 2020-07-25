import { Injectable, Inject } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AdvertCreated } from '../domains/adverts/events/advert-created.event';
import { UsersService } from '../models/users/users.service';
import { PermissionsModelService } from '../models/permissions/permissions.service';
import { UpdatePermission } from '../domains/permissions/commands/update-permission.command';
import { Roles } from '@ppm/common/main';
import { CreatePermission } from '../domains/permissions/commands/create-permission.command';

@Injectable()
export class AdvertsSagas {
  @Inject() private readonly _userService: UsersService;
  @Inject() private readonly _permissionsService: PermissionsModelService;

  @Saga()
  updatePermission = (
    events$: Observable<AdvertCreated>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(AdvertCreated),
      switchMap(async (event) => {
        const user = await this._userService.getById(
          event.data.creator._id.toHexString()
        );

        const permissions = await this._permissionsService.getByUserIdAndRole(
          user._id.toHexString(),
          Roles.MENTOR
        );

        if (permissions.length) {
          let permission = permissions[0];
          if (!permission.adverts) {
            permission.adverts = [];
          }
          permission.adverts.push({ _id: event.id, title: event.data.title });
          return new UpdatePermission(permission._id.toHexString(), permission);
        } else {
          return new CreatePermission({
            role: Roles.MENTOR,
            user: { _id: user._id, name: user.userName },
          });
        }
      })
    );
  };
}
