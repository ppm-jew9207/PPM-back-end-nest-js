import { Body, Controller, Post, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAdvert } from './commands/create-advert.command';
import { RemoveAdvert } from './commands/remove-advert.command';
import { UpdateAdvert } from './commands/update-advert.command';
import { UpdateAdvertPayloadDto } from '../../models/adverts/dtos/update-advert.dto';
import { CreateAdvertPayloadDto } from '../../models/adverts/dtos/create-advert.dto';

@Controller('adverts-domain')
export class AdvertsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createAdvert(@Body() dto: CreateAdvertPayloadDto) {
    return this.commandBus.execute(new CreateAdvert(dto));
  }

  @Post('/:id/update')
  @HttpCode(HttpStatus.OK)
  async updatesAdvert(@Param('id') id: string, @Body() updateAdvertDto: UpdateAdvertPayloadDto): Promise<Boolean> {
    return this.commandBus.execute(new UpdateAdvert({ id, ...updateAdvertDto }));
  }

  @Post('/:id/delete')
  @HttpCode(HttpStatus.OK)
  async removeAdvert(@Param('id') id: string) {
    return this.commandBus.execute(new RemoveAdvert({ id }));
  }
}
