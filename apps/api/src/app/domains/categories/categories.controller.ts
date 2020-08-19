import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UseInterceptors,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateCategory } from './commands/create-category.command';
import { RemoveCategory } from './commands/remove-category.command';
import { UpdateCategory } from './commands/update-category.command';
import { UpdateCategoryPayloadDto } from '../../models/categories/dtos/update-category.dto';
import { CreateCategoryPayloadDto } from '../../models/categories/dtos/create-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath, Roles } from '@ppm/common/main';

@Controller(PrivateRoutesPath.CATEGORIES)
@ApiTags(PrivateRoutesPath.CATEGORIES)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CategoriesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() dto: CreateCategoryPayloadDto): Promise<Boolean> {
    return this.commandBus.execute(new CreateCategory(dto));
  }

  @Post(PrivateRoutesPath.POST_UPDATE)
  @HttpCode(HttpStatus.OK)
  async updates(
    @Param('id') id: string,
    @Body() updateCategoryPayload: UpdateCategoryPayloadDto
  ): Promise<boolean> {
    return this.commandBus.execute(
      new UpdateCategory({ ...updateCategoryPayload, id })
    );
  }

  @Post(PrivateRoutesPath.POST_DELETE)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string): Promise<Boolean> {
    return this.commandBus.execute(new RemoveCategory(id));
  }
}
