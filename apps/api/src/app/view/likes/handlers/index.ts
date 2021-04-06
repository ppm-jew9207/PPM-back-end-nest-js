import { LikeCreatedHandler } from './created-like.handler';
import { LikeRemovedHandler } from './removed-like.handler';
import { GetLikesHandler } from '../queries/handlers/get-likes.handler';
import { GetLikesLikeHandler } from '../queries/handlers/get-likeslike.handler';
import { GetLikesShareHandler } from '../queries/handlers/get-likesshare.handler';

export const EventHandlers = [ 
  LikeCreatedHandler,
  GetLikesHandler,
  GetLikesLikeHandler,
  GetLikesShareHandler,
  LikeRemovedHandler
];
