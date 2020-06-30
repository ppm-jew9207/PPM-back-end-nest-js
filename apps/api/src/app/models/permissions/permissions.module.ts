import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionsModelService } from './permissions.service';
import { PermissionsSchema } from './permissions.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ViewModels.PERMISSIONS_VIEW, schema: PermissionsSchema },
    ]),
  ],
  providers: [PermissionsModelService],
  exports: [PermissionsModelService],
})
export class PermissionsModelModule {}
