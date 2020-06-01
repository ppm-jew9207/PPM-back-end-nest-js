import { Injectable } from '@nestjs/common';
import { Advert } from 'src/app/common/interfaces/advert.interface';
import { CreateAdvertDto } from 'src/app/common/dto/createAdvert.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { Model } from 'mongoose';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectModel(ViewModels.ADVERT) private advertModel: Model<Advert>
  ) {}

  async createAdvert(createAdvertDto: CreateAdvertDto): Promise<Advert>  {
    const { title, description } = createAdvertDto;
    const newAdvert = new this.advertModel();
    newAdvert.title = title;
    newAdvert.description = description;
    return await newAdvert.save();
  }
}
