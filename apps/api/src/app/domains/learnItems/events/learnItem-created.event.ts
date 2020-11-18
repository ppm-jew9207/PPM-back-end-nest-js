import { LearnItemPayload } from '../../../models/learnItems/learnItems.interface';
export class LearnItemCreated {
  constructor(
    public readonly id: string,
    public readonly data: LearnItemPayload
  ) {}
}
