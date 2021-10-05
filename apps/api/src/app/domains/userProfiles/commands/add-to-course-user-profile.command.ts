import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileUpdated } from '../events/user-profile-updated.event';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { exception } from 'console';

export class AddToCourseUserProfileCommand {
  constructor(public userId: string, public courseId: string) {}
}
@CommandHandler(AddToCourseUserProfileCommand)
export class AddToCourseUserProfileHandler
  implements ICommandHandler<AddToCourseUserProfileCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({ userId, courseId }: AddToCourseUserProfileCommand) {
    var currentUserProfile = await this._userProfileModelService.getById(
      userId
    );

    const coursesIdsEmpty = currentUserProfile?.coursesIds
      ? [...currentUserProfile.coursesIds]
      : [];
    if (currentUserProfile?.coursesIds?.includes(courseId)) {
      return { errorCourseExist: 'You are already subscribed to this course.' };
    }
    coursesIdsEmpty.push(courseId);
    var updatedUserProfile = {
      ...currentUserProfile._doc,
      coursesIds: coursesIdsEmpty,
    };

    const aggregate = new UserProfileAggregate();
    aggregate.apply(new UserProfileUpdated(userId, updatedUserProfile));

    const userProfile = this._publisher.mergeObjectContext(aggregate);
    userProfile.commit();
    return true;
  }
}
