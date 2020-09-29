import { GetUserProfileByUserIdHandler } from './get-user-profile-by-user-id.handler';
import { GetUserProfileByIdHandler } from './get-user-profile-by-id.handler';
import { GetUserProfileByEmailHandler } from './get-user-profile-by-email.handler';

export const QueryHandlers = [
  GetUserProfileByUserIdHandler,
  GetUserProfileByIdHandler,
  GetUserProfileByEmailHandler,
];
