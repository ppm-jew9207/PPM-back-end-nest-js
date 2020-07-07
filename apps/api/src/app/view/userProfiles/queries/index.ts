import { GetUserProfilesHandler } from './get-user-profiles.handlers';
import { GetUserProfileByIdHandler } from './get-user-profile-by-id.handler';
import { GetUserProfileByEmailHandler } from './get-user-profile-by-email.handler';

export const QueryHandlers = [
  GetUserProfilesHandler,
  GetUserProfileByIdHandler,
  GetUserProfileByEmailHandler,
];
