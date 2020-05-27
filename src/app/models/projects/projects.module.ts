import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModelService } from './projects.service';
import { ProjectsSchema } from './projects.schema';
import { ViewModels } from '../../helpers/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: ViewModels.PROJECTS_VIEW, schema: ProjectsSchema }])],
  providers: [ProjectsModelService],
  exports: [ProjectsModelService]
})
export class ProjectsModelModule {}