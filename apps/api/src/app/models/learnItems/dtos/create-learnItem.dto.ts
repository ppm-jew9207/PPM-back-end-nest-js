import { ApiProperty } from '@nestjs/swagger';

export class CreateLearnItemPayloadDto {
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly value: string;
}
