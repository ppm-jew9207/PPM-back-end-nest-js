import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainsModule } from './domains/domains.module';
import { ViewModule } from './view/view.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModelModule } from './models/users/users.module';
import { RolesGuard } from './common/guards/roles.guard';
import { SagasModule } from './sagas/sagas.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const domains = [DomainsModule];
const view = [ViewModule];

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'ppm'),
      exclude: ['/api*']
    }),
    ...domains,
    ...view,
    MongooseModule.forRoot(process.env.MONGO_DB),
    UsersModelModule,
    AuthModule,
    SagasModule
  ],
  controllers: [AppController],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
