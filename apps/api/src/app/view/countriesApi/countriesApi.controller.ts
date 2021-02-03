import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetCountriesQuery } from './queries/handlers/get-countries.handler';
import { GetStatesQuery } from './queries/handlers/get-states.handler';
import { GetCitiesQuery } from './queries/handlers/get-cities.handler';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { CountriesPayload, CitiesPayload, StatesPayload } from '../../models/countriesApi/countriesApi.interface';

@Controller(PrivateRoutesPath.COUNTRIES)
@ApiTags(PrivateRoutesPath.COUNTRIES)
export class CountriesApiController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getCountries(): Promise<CountriesPayload[]> {
    return this.queryBus.execute(new GetCountriesQuery());
  }

  @Get(PrivateRoutesPath.COUNTRY)
  async getStates(@Param('countryName') countryName: string): Promise<StatesPayload> {
    return this.queryBus.execute(new GetStatesQuery(countryName));
  }

  @Get(PrivateRoutesPath.STATE)
  async getCities(@Param('stateName') stateName: string): Promise<CitiesPayload> {
    return this.queryBus.execute(new GetCitiesQuery(stateName));
  }
}
