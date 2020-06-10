import { CreateMentor } from '../dto/create-mentor-payload.dto';

export class MentorCreated{
    constructor(public readonly mentor:CreateMentor){
    }
}