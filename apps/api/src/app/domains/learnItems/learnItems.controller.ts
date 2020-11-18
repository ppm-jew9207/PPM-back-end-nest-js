import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateLearnItem } from './commands/create-learnItem.command';
import { RemoveLearnItem } from './commands/remove-learnItem.command';
import { UpdateLearnItem } from './commands/update-learnItem.command';
import { UpdateLearnItemPayloadDto } from '../../models/learnItems/dtos/update-learnItem.dto';
import { CreateLearnItemPayloadDto } from '../../models/learnItems/dtos/create-learnItem.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';

@Controller(PrivateRoutesPath.LEARN_ITEMS)
@ApiTags(PrivateRoutesPath.LEARN_ITEMS)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class LearnItemsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateLearnItemPayloadDto): Promise<Boolean> {
    return this.commandBus.execute(new CreateLearnItem(dto));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  @HttpCode(HttpStatus.OK)
  async updates(
    @Param('id') id: string,
    @Body() updateLearnItemPayload: UpdateLearnItemPayloadDto
  ): Promise<boolean> {
    return this.commandBus.execute(
      new UpdateLearnItem({ ...updateLearnItemPayload, id })
    );
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<Boolean> {
    return this.commandBus.execute(new RemoveLearnItem(id));
  }
}
