import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { LearnItemsController } from "./learnItems.controller";

import { LearnItemsModelModule } from "../../models/learnItems/learnItems.module";
import { RemoveLearnItemHandler } from "./commands/remove-learnItem.command";
import { CreateLearnItemHandler } from "./commands/create-learnItem.command";
import { UpdateLearnItemHandler } from "./commands/update-learnItem.command";
import { UsersModelModule } from "../../models/users/users.module";

const commandHandlers = [
  CreateLearnItemHandler,
  RemoveLearnItemHandler,
  UpdateLearnItemHandler,
];

@Module({
  imports: [CqrsModule, LearnItemsModelModule, UsersModelModule],
  controllers: [LearnItemsController],
  providers: [...commandHandlers],
})
export class LearnItemsDomainModule {}
