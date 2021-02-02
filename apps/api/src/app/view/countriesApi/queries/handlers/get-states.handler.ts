import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CountriesApiModelService,  } from "../../../../models/countriesApi/countriesApi.service";
import { Inject } from "@nestjs/common";
import { CountriesApiViewModel } from "../../../../models/countriesApi/countriesApi.interface";

export class GetStatesQuery {
  constructor(public readonly countryName: string) {}
}

@QueryHandler(GetStatesQuery)
export class GetStatesHandler implements IQueryHandler<GetStatesQuery> {
  @Inject() private readonly _countriesApiViewService: CountriesApiModelService;

  async execute({countryName}): Promise<CountriesApiViewModel[]> {
    return this._countriesApiViewService.getStates(countryName);
  }
}
