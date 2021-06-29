import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileUpdated } from '../events/user-profile-updated.event';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { exception } from 'console';

export class RemoveFromCourseUserProfileCommand {
  constructor(public userId: string, public courseId: string) {}
}
@CommandHandler(RemoveFromCourseUserProfileCommand)
export class RemoveFromCourseUserProfileHandler
  implements ICommandHandler<RemoveFromCourseUserProfileCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({ userId, courseId }: RemoveFromCourseUserProfileCommand) {
    var currentUserProfile = await this._userProfileModelService.getById(
      userId
    );
    if (currentUserProfile?.coursesIds?.includes(courseId)) {
      var updatedUserProfile = {
        ...currentUserProfile._doc,
        coursesIds: [...currentUserProfile.coursesIds].filter(
          (cId) => cId !== courseId
        ),
      };

      const aggregate = new UserProfileAggregate();
      aggregate.apply(new UserProfileUpdated(userId, updatedUserProfile));

      const userProfile = this._publisher.mergeObjectContext(aggregate);
      userProfile.commit();
      return true;
    } else
      return {
        errorCourseExist: 'You are already unsubscribed from this course.',
      };
  }
}
