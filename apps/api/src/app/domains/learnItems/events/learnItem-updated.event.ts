import { LearnItemPayload } from '../../../models/learnItems/learnItems.interface';

export class LearnItemUpdated {
  constructor(public readonly learnItem: LearnItemPayload) {}
}
