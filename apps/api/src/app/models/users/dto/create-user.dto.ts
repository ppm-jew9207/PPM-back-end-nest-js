import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  public readonly email: string;
  @ApiProperty()
  public password: string;
  @ApiProperty()
  public readonly phone?: string;
}