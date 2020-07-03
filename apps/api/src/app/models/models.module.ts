
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersModelModule } from './users/users.module';

@Module({
  imports: [CqrsModule, UsersModelModule],
  controllers: [],
  providers: [
  ],
})
export class ModelsModule { }