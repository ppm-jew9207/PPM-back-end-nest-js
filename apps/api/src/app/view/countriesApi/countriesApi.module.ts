import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { QueryHandlers } from "./queries/handlers";
import { CountriesApiController } from "./countriesApi.controller";
import { CountriesApiModelModule } from "../../models/countriesApi/countriesApi.module";

@Module({
  imports: [CqrsModule, CountriesApiModelModule],
  controllers: [CountriesApiController],
  providers: [ ...QueryHandlers ],
})
export class CountriesApiViewModule {}
