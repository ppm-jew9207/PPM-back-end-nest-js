import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  public readonly firstName?: string;
  @ApiProperty()
  public readonly lastName?: string;
  @ApiProperty()
  public readonly email: string;
  @ApiProperty()
  public readonly phone?: string;
  @ApiProperty()
  public readonly birthDayDate?: Date;
  @ApiProperty()
  public password: string;
}