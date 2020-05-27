import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ViewModels } from '../../helpers/constants';
import { ProjectsViewModel } from './projects.interface';
// import { AbstractModelBase } from '../../helpers/base.model.commands';

@Injectable()
export class ProjectsModelService  {
  @InjectModel(ViewModels.PROJECTS_VIEW) public model!: Model<ProjectsViewModel>;

}
