import { Body, Controller, Post, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAdvert } from './commands/create-advert.command';
import { RemoveAdvert } from './commands/remove-advert.command';
import { Types } from 'mongoose';
import { UpdateAdvert } from './commands/update-advert.command';
import { UpdateAdvertDto } from '../../common/dto/createAdvert.dto';

@Controller('adverts-domain')
export class AdvertsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createAdvert(@Body() dto: UpdateAdvertDto) {
    return this.commandBus.execute(new CreateAdvert(dto));
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updatesAdvert(@Param('id') id: string, @Body() updateAdvertDto: UpdateAdvertDto): Promise<Boolean> {
    return this.commandBus.execute(new UpdateAdvert({ _id: id, ...updateAdvertDto }));
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async removeAdvert(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveAdvert({ _id: id}));
  }
}
