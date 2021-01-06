import { LearnItemCreatedHandler } from "./created-learnItem.handler";
import { LearnItemRemovedHandler } from "./removed-learnItem.handler";
import { LearnItemUpdatedHandler } from "./updated-learnItem.handler";

export const EventHandlers = [
  LearnItemCreatedHandler,
  LearnItemRemovedHandler,
  LearnItemUpdatedHandler,
];
