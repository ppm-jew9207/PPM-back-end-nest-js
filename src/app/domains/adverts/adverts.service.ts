import { Injectable } from '@nestjs/common';
import { Advert } from 'src/app/common/interfaces/advert.interface';
import { CreateAdvertDto, UpdateAdvertDto } from 'src/app/common/dto/createAdvert.dto';
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

  async updateAdvert(id: string, createAdvertDto: UpdateAdvertDto): Promise<Advert>  {
    const { title, description } = createAdvertDto;
    return this._model.findOneAndUpdate(
      { _id: id },
      {
        title,
        description
      },
      { upsert: true, new: true }
    );
  }

  async removeAdvert(id: string): Promise<Boolean>  {
    await this._model.findOneAndDelete(
      { _id: id},
      (err) => {
        if(err) console.log(err);
        console.log("Successful deletion");
      }
    );
    return true;
  }
}
