import { ApiProperty } from '@nestjs/swagger';
import { Login } from '../interfaces/login.interface';

export class LoginDto implements Login {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
}