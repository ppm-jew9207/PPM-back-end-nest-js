import { ApiProperty } from '@nestjs/swagger';
import { CreateUserProfile } from '../user-profile.interface';

export class CreateUserProfilePayloadDto implements CreateUserProfile {
  @ApiProperty()
  public readonly firstName?: string;
  @ApiProperty()
  public readonly lastName?: string;
  @ApiProperty()
  public readonly photo?: string;
  @ApiProperty()
  public readonly fieldOfProfession?: string;
  @ApiProperty({ isArray: true, type: 'string' })
  public readonly categories?: string[];
  @ApiProperty()
  public readonly city?: string;
}
