import { CategoryCreatedHandler } from "./created-category.handler";
import { CategoryRemovedHandler } from "./removed-category.handler";
import { CategoryUpdatedHandler } from "./updated-category.handler";

export const EventHandlers = [
  CategoryCreatedHandler,
  CategoryRemovedHandler,
  CategoryUpdatedHandler,
];
