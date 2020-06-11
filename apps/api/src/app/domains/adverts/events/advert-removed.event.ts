import { RemoveAdvertPayload } from '../../../models/adverts/adverts.interface';

export class AdvertRemoved {
  constructor(public readonly advert: RemoveAdvertPayload) {}
}