import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException, Inject } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileUpdated } from '../events/user-profile-updated.event';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';
import { UserProfile } from '../../../models/userProfiles/user-profile.interface';
import { UserProfileSchema } from '../../../models/userProfiles/user-profile.schema';
import { Schema } from 'mongoose';

export class AddToCourseUserProfileCommand {
  constructor(public userId: string, public courseId: string) {}
}
@CommandHandler(AddToCourseUserProfileCommand)
export class AddToCourseUserProfileHandler
  implements ICommandHandler<AddToCourseUserProfileCommand> {
  @Inject() private readonly _publisher: EventPublisher;
  @Inject() private readonly _userProfileModelService: UserProfileModelService;
  async execute({
    userId,
    courseId,
  }: AddToCourseUserProfileCommand): Promise<Boolean> {
    var currentUserProfile = await this._userProfileModelService.getById(
      userId
    );
    console.log(currentUserProfile, 'CurrentProfile'); //TODO remove
    const coursesIdsEmpty = currentUserProfile?.coursesIds
      ? [...currentUserProfile.coursesIds]
      : [];
    if (currentUserProfile?.coursesIds?.includes(courseId)) {
      throw new BadRequestException(
        'You are already subscibed to that course.'
      );
    }
    coursesIdsEmpty.push(courseId);
    var updatedUserProfile = {
      ...currentUserProfile._doc,
      coursesIds: coursesIdsEmpty,
    };

    console.log(updatedUserProfile, 'UpdatedProfile'); //TODO remove

    const aggregate = new UserProfileAggregate();
    aggregate.apply(new UserProfileUpdated(userId, updatedUserProfile));

    const userProfile = this._publisher.mergeObjectContext(aggregate);
    console.log(userProfile, 'userProfile'); //TODO remove
    userProfile.commit();
    return true;
  }
}
