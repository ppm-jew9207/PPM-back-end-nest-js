import {
  Controller,
  HttpStatus,
  HttpCode,
  Get,
  Param,
} from '@nestjs/common';

import { AdvertsService } from './adverts.service';
import { Advert } from 'src/app/common/interfaces/advert.interface';

@Controller('adverts-view')
export class AdvertsController {
  constructor(private _advertsService: AdvertsService) {}

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getAdvertById(@Param('id') id: string): Promise<Advert> {
    return this._advertsService.getAdvertById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAdverts(): Promise<Advert[]> {
    return this._advertsService.getAdverts();
  }
  
}