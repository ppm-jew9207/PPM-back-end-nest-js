import { AdvertCreatedHandler } from './created-advert.handler';
import { AdvertRemovedHandler } from './removed-advert.handler';
import { AdvertUpdatedHandler } from './updated-advert.handler'

export const EventHandlers = [ AdvertCreatedHandler, AdvertRemovedHandler, AdvertUpdatedHandler];
