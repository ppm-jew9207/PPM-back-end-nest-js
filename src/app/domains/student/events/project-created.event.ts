import { CreateProjectPayload } from '../../../models/projects/projects.interface';

export class ProjectCreated {
  constructor(public readonly project: CreateProjectPayload) {}
}