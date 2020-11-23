import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetLearnItemsQuery } from './queries/handlers/get-learnItems.handler';
import { GetLearnItemQuery } from './queries/handlers/get-learnItem.handler';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { LearnItemPayload } from '../../models/learnItems/learnItems.interface';

@Controller(PrivateRoutesPath.LEARN_ITEMS)
@ApiTags(PrivateRoutesPath.LEARN_ITEMS)
export class LearnItemsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<LearnItemPayload[]> {
    return this.queryBus.execute(new GetLearnItemsQuery());
  }

  @Get(PrivateRoutesPath.GET_BY_ID)
  async getById(@Param('id') id: string): Promise<LearnItemPayload> {
    return this.queryBus.execute(new GetLearnItemQuery(id));
  }
}
