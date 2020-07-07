import { UserProfileCreatedHandler } from './created-user-profile.handler';
import { UserProfileDeletedHandler } from './deleted-user-profile.handler';
import { UserProfileUpdatedHandler } from './updated-user-profile.handler';

export const EventHandlers = [
  UserProfileCreatedHandler,
  UserProfileDeletedHandler,
  UserProfileUpdatedHandler,
];
