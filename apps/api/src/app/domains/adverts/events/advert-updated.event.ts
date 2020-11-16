import { UpdateAdvertPayloadDto } from '../../../models/adverts/dtos/update-advert.dto';

export class AdvertUpdated {
  constructor(public readonly data: UpdateAdvertPayloadDto) {}
}