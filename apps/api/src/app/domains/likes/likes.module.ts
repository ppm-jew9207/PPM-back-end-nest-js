import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { LikesController } from './likes.controller';

// import { AdvertsModelModule } from '../../models/adverts/adverts.module';
// import { RemoveAdvertHandler } from './commands/remove-advert.command';
import { CreateLikeHandler } from './commands/create-like.command';
// import { UpdateAdvertHandler } from './commands/update-advert.command';
import { UsersModelModule } from '../../models/users/users.module';
// import { UserProfileModelModule } from '../../models/userProfiles/user-profile.module';

const commandHandlers = [
  CreateLikeHandler,
  // RemoveAdvertHandler,
  // UpdateAdvertHandler,
];

@Module({
  imports: [
    CqrsModule,
    // AdvertsModelModule,
    UsersModelModule,
    // UserProfileModelModule,
  ],
  controllers: [LikesController],
  providers: [...commandHandlers],
})
export class LikesDomainModule {}
