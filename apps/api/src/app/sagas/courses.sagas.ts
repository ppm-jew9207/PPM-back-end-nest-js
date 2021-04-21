import { Injectable, Inject } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseCreated } from '../domains/courses/events/course-created.event';
import { UsersService } from '../models/users/users.service';
import { PermissionsModelService } from '../models/permissions/permissions.service';
import { UpdatePermission } from '../domains/permissions/commands/update-permission.command';
import { Roles } from '@ppm/common/main';
import { CreatePermission } from '../domains/permissions/commands/create-permission.command';
import { CoursePayload } from '../models/courses/courses.interface';

@Injectable()
export class CoursesSagas {
  @Inject() private readonly _userService: UsersService;
  @Inject() private readonly _permissionsService: PermissionsModelService;

  @Saga()
  updatePermission = (
    events$: Observable<CourseCreated>
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(CourseCreated),
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
          if (!permission.courses) {
            permission.courses = [];
          }

          const course:CoursePayload = {
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            programmingLanguages: data.programmingLanguages,
            preRequisites: data.preRequisites,
            courseImageUrl: data.courseImageUrl,
            lessonDescription: data.lessonDescription,
            lessonsList: data.lessonsList,
            categories: data.categories,
            learnItems: data.learnItems,
            creator: {
              _id: data.creator._id,
              name: data.creator.name,
              imageUrl: data.creator.imageUrl
            }
          }
          permission.courses.push(course);
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
