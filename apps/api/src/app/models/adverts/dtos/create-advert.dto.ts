import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvertPayloadDto{
  @ApiProperty()
  public readonly title: string;
  @ApiProperty()
  public readonly description?: string;
}
