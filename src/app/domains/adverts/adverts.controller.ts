import {
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';

import { CreateAdvertDto, UpdateAdvertDto } from '../../common/dto/advert.dto';
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

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updatesAdvert(@Param('id') id: string, @Body() updateAdvertDto: UpdateAdvertDto): Promise<Boolean> {
    this._advertsService.updateAdvert(id, updateAdvertDto);
    return true;
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async deleteAdvert(@Param('id') id: string): Promise<Boolean> {
    this._advertsService.removeAdvert(id);
    return true;
  }
}
