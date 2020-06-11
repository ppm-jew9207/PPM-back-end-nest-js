import { CreateAdvertPayload } from '../../../models/adverts/adverts.interface';
export class AdvertCreated {
  constructor(public readonly id: string, public readonly data: CreateAdvertPayload) {}
}