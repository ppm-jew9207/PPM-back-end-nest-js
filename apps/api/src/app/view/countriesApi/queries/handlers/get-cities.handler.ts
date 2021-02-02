import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CountriesApiModelService } from '../../../../models/countriesApi/countriesApi.service';
import { Inject } from '@nestjs/common';
import { CountriesApiViewModel } from '../../../../models/countriesApi/countriesApi.interface';

export class GetCitiesQuery {
  constructor(public readonly stateName: string) {}
}

@QueryHandler(GetCitiesQuery)
export class GetCitiesHandler implements IQueryHandler<GetCitiesQuery> {
  @Inject() private readonly _countriesApiViewService: CountriesApiModelService;

  async execute({stateName}): Promise<CountriesApiViewModel[]> {
    return this._countriesApiViewService.getCities(stateName);
  }
}
