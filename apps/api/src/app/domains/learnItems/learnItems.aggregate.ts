import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";

export class LearnItemsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
