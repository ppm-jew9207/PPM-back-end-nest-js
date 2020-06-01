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

@Controller('advert-domain')
export class AdvertsController {
  constructor(private advertsService: AdvertsService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  async createAdvert(@Body() createAdvertDto: CreateAdvertDto): Promise<Advert> {
    return await this.advertsService.createAdvert(createAdvertDto);
  }
}
