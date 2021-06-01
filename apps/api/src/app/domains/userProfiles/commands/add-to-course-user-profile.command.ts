import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException, Inject } from '@nestjs/common';
import { UserProfileAggregate } from '../user-profiles.aggregate';
import { UserProfileUpdated } from '../events/user-profile-updated.event';
import { UserProfileModelService } from '../../../models/userProfiles/user-profile.service';

export class AddToCourseUserProfileCommand {
  constructor(public userId: string, public courseId: string) {}
}
@CommandHandler(AddToCourseUserProfileCommand)
export class AddToCourseUserProfileHandler
  implements ICommandHandler<AddToCourseUserProfileCommand> {
    @Inject() private readonly _publisher: EventPublisher;
    @Inject() private readonly _userProfileModelService: UserProfileModelService;
    async execute({ userId, courseId }: AddToCourseUserProfileCommand) {
        const currentUserProfile = await this._userProfileModelService.getById(userId);
        if (currentUserProfile.coursesIds.includes(courseId)) {
            return new BadRequestException('You are already subscibed to that course.');
        }
        currentUserProfile.coursesIds.push(courseId);



    const aggregate = new UserProfileAggregate();
    aggregate.apply(new UserProfileUpdated(userId, currentUserProfile));

    const userProfile = this._publisher.mergeObjectContext(aggregate);
    userProfile.commit();

    return null;
  }
}
