import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CountriesApiModelService,  } from "../../../../models/countriesApi/countriesApi.service";
import { Inject } from "@nestjs/common";
import { CountriesApiViewModel } from "../../../../models/countriesApi/countriesApi.interface";

export class GetCountriesQuery {}

@QueryHandler(GetCountriesQuery)
export class GetCountriesHandler implements IQueryHandler<GetCountriesQuery> {
  @Inject() private readonly _countrieApiViewService: CountriesApiModelService;

  async execute(): Promise<CountriesApiViewModel[]> {
    return this._countrieApiViewService.getCountries();
  }
}
