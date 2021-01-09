import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";

export class LessonsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
//Hello world