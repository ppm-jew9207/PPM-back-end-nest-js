import {
  Controller,
  HttpStatus,
  HttpCode,
  Get,
} from '@nestjs/common';

import { AdvertsService } from './adverts.service';
import { Advert } from 'src/app/common/interfaces/advert.interface';

@Controller('advert-view')
export class AdvertsController {
  constructor(private advertsService: AdvertsService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async createAdvert(): Promise<Advert[]> {
    return await this.advertsService.getAdverts();
  }
}