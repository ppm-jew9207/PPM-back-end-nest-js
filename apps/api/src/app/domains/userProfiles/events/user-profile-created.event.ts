import { CreateUserProfile } from '../../../models/userProfiles/user-profile.interface';

export class UserProfileCreated {
  constructor(
    public readonly userProfile: CreateUserProfile,
    public readonly userId: string
  ) {}
}
