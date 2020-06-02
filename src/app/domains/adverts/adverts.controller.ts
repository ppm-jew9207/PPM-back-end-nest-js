import {
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Body,
} from '@nestjs/common';

import { CreateAdvertDto } from '../../common/dto/createAdvert.dto';
import { AdvertsService } from './adverts.service';
import { Advert } from 'src/app/common/interfaces/advert.interface';

@Controller('adverts-domain')
export class AdvertsController {
  constructor(private _advertsService: AdvertsService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async createAdvert(@Body() createAdvertDto: CreateAdvertDto): Promise<Advert> {
    return this._advertsService.createAdvert(createAdvertDto);
  }
}
