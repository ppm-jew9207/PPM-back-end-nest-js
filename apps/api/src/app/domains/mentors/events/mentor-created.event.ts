import { CreateMentor } from '../../../models/mentors/mentor.interface';

export class MentorCreated {
  constructor(
    public readonly mentor: CreateMentor,
    public readonly id: string,
    public readonly userId: string
  ) {}
}
