import { ApiProperty } from '@nestjs/swagger';
import { LearnItemPayload } from '../learnItems.interface';

export class UpdateLearnItemPayloadDto implements LearnItemPayload {
  @ApiProperty()
  public readonly id: string;
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly value: string;
}
