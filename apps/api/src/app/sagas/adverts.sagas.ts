import { Injectable, Inject } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UpdateMentorCommand } from '../domains/mentors/commands/update-mentor-command';
import { AdvertCreated } from '../domains/adverts/events/advert-created.event';
import { UsersService } from '../models/users/users.service';
import { MentorModelService } from '../models/mentors/mentor.service';
import { MentorViewModel } from '../models/mentors/mentor.interface';
import { UpdateMentor } from '../domains/mentors/mentors.interface';


@Injectable()
export class AdvertsSagas {
  @Inject() private readonly _userService: UsersService;
  @Inject() private readonly _mentorModelService: MentorModelService;

  @Saga()
  updateMentor = (events$: Observable<AdvertCreated>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(AdvertCreated),
        switchMap(async (event) => {
          const user = await this._userService.getById(event.data.creator._id.toHexString());
          const mentor: MentorViewModel = await this._mentorModelService.model.findOne({email: user.email});
          mentor.adverts.push({_id: event.id, title: event.data.title});

          const mentorUpdatedObject: UpdateMentor = {email: mentor.email,
            categories: mentor.categories, adverts: mentor.adverts};
          
          return new UpdateMentorCommand(mentor._id.toHexString(), mentorUpdatedObject);
        }),
      );
  }
}
