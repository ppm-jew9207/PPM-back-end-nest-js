import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";

export class CategoriesAggregate extends AggregateRoot {
  _id: Types.ObjectId;
}
