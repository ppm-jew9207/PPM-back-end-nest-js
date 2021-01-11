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
import { AdvertPayload } from '../models/adverts/adverts.interface';

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
      switchMap(async ({ id, data }) => {
        const user = await this._userService.getById(
          data.creator._id.toHexString()
        );

        const permissions = await this._permissionsService.getByUserIdAndRole(
          user._id.toHexString(),
          Roles.MENTOR
        );

        if (permissions.length) {
          const permission = permissions[0];
          if (!permission.adverts) {
            permission.adverts = [];
          }

          const advert:AdvertPayload = {
            title: data.title,
            description: data.description,
            // category: data.category,
            imageUrl: data.imageUrl,
            advertImageUrl: data.advertImageUrl,
            creator: {
              _id: data.creator._id,
              name: data.creator.name,
              imageUrl: data.creator.imageUrl
            }
          }
          permission.adverts.push(advert);
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
