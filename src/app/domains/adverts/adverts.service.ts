import { Injectable } from '@nestjs/common';
import { Advert } from 'src/app/common/interfaces/advert.interface';
import { CreateAdvertDto } from 'src/app/common/dto/createAdvert.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { Model } from 'mongoose';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectModel(ViewModels.ADVERT) private _model: Model<Advert>
  ) {}

  async createAdvert(createAdvertDto: CreateAdvertDto): Promise<Boolean>  {
    const { title, description } = createAdvertDto;
    await this._model.findOneAndUpdate(
      { title },
      {
        title,
        description
      },
      { upsert: true, new: true }
    );
    return true;
  }
}
