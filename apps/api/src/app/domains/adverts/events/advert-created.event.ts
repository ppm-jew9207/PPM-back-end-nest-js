import { CreateAdvertPayload } from '../../../models/adverts/adverts.interface';

export class AdvertCreated {
  constructor(public readonly advert: CreateAdvertPayload) {}
}