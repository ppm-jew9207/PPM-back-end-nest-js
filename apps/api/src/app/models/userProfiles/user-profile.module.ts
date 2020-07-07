import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewModels } from '../../helpers/constants';
import { UserProfileSchema } from './user-profile.schema';
import { UserProfileModelService } from './user-profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.USER_PROFILES, schema: UserProfileSchema },
    ]),
  ],
  providers: [UserProfileModelService],
  exports: [UserProfileModelService],
})
export class UserProfileModelModule {}
