import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainsModule } from './domains/domains.module';
import { ViewModule } from './view/view.module';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModelModule } from './models/users/users.module';
import { RolesGuard } from './common/guards/roles.guard';

const domains = [DomainsModule];
const view = [ViewModule];

@Module({
  imports: [
    ...domains,
    ...view,
    MongooseModule.forRoot(process.env.MONGO_DB),
    UsersModelModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, HeroesGameSagas, RolesGuard],
})
export class AppModule {}
