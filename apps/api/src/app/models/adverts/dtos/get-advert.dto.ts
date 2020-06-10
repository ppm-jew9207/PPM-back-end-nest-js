import { ApiProperty } from '@nestjs/swagger';
import { GetAdvertPayload} from '../adverts.interface';

export class GetAdvertPayloadDto implements GetAdvertPayload {
  @ApiProperty()
  public readonly id: string;
}
