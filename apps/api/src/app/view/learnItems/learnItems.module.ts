import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { EventHandlers } from "./handlers";
import { LearnItemsController } from "./learnItems.controller";
import { QueryHandlers } from "./queries/handlers";
import { LearnItemsModelModule } from "../../models/learnItems/learnItems.module";

@Module({
  imports: [CqrsModule, LearnItemsModelModule],
  controllers: [LearnItemsController],
  providers: [...EventHandlers, ...QueryHandlers],
})
export class LearnItemsViewModule {}
