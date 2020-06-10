import { Body, Controller, Post, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAdvert } from './commands/create-advert.command';
import { RemoveAdvert } from './commands/remove-advert.command';
import { CreateAdvertPayloadDto, RemoveAdvertPayloadDto } from '../../models/adverts/dtos/create-advert.dto';
import { Types } from 'mongoose';
import { UpdateAdvert } from './commands/update-advert.command';

@Controller('adverts-domain')
export class AdvertsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createAdvert(@Body() dto: CreateAdvertPayloadDto) {
    return this.commandBus.execute(new CreateAdvert(dto));
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updatesAdvert(@Param('id') id: Types.ObjectId, @Body() updateAdvertDto: UpdateAdvertDto): Promise<Boolean> {
    return this.commandBus.execute(new UpdateAdvert({ _id: id, ...updateAdvertDto }));
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async removeAdvert(@Param('id') id: Types.ObjectId) {
    return this.commandBus.execute(new RemoveAdvert({ _id: id}));
  }
}
