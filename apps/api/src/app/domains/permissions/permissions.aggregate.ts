import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";

export class PermissionsAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
