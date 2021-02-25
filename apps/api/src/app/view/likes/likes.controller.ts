import {
  Controller
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';

@Controller(PrivateRoutesPath.LIKES)
@ApiTags(PrivateRoutesPath.LIKES)
export class LikesController {
  constructor(private readonly queryBus: QueryBus) {}
}
