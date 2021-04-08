import { ApiProperty } from '@nestjs/swagger';
import { UserProfile, SocialLink } from '../user-profile.interface';

export class UpdateUserProfilePayloadDto implements UserProfile {
  @ApiProperty()
  public readonly type: string;
  @ApiProperty()
  public readonly description: string;
  @ApiProperty()
  public readonly firstName: string;
  @ApiProperty()
  public readonly lastName: string;
  @ApiProperty()
  public readonly photo: string;
  @ApiProperty()
  public readonly fieldOfProfession: string;
  @ApiProperty()
  public readonly company: string;
  @ApiProperty()
  public readonly categories: string[];
  @ApiProperty()
  public readonly city: string;
  @ApiProperty()
  public readonly country: string;
  @ApiProperty()
  public readonly state: string;
  @ApiProperty()
  public readonly phone: string;
  @ApiProperty()
  public readonly email: string;
  @ApiProperty({
    isArray: true,
    type: ['SocialLink'],
  })
  public readonly socialLinks?: SocialLink[];
  @ApiProperty()
  public readonly website?: string;
}
