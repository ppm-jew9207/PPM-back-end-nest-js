import { UpdateAdvertPayload } from '../../../models/adverts/adverts.interface';

export class AdvertUpdated {
  constructor(public readonly advert: UpdateAdvertPayload) {}
}