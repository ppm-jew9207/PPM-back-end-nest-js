import { UpdateUserProfile } from '../../../models/userProfiles/user-profile.interface';

export class UserProfileUpdated {
  constructor(
    public readonly id: string,
    public readonly userProfile: UpdateUserProfile
  ) {}
}
