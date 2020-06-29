import { Injectable, Inject } from '@nestjs/common';
import { ICommand, ofType, Saga, CommandBus } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { switchMap, concatAll } from 'rxjs/operators';
import { UsersService } from '../models/users/users.service';
import { MentorCreated } from '../domains/mentors/events/mentor-created.event';
import { CreatePermission } from '../domains/permissions/commands/create-permission.command';

@Injectable()
export class MentorsSagas {
  @Inject() private readonly _userService: UsersService;

  @Saga()
  createMentor = (events$: Observable<MentorCreated>): Observable<ICommand> => {
    return events$.pipe(
      ofType(MentorCreated),
      switchMap(async (event) => {
        const user = await this._userService.getById(event.userId);
        return Promise.all(
          user.roles.map(async (role) => {
            if (role) {
              const cmd = new CreatePermission({
                role,
                user: { _id: user._id, name: user.userName },
              });
              return cmd;
            }
            return null;
          })
        );
      }),
      concatAll()
    );
  };
}
