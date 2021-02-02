import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetCountriesQuery } from './queries/handlers/get-countries.handler';
import { GetCitiesQuery } from './queries/handlers/get-cities.handler';
import { ApiTags } from '@nestjs/swagger';
import { PrivateRoutesPath } from '@ppm/common/main';
import { CountriesApiPayload } from '../../models/countriesApi/countriesApi.interface';

@Controller(PrivateRoutesPath.COUNTRIES)
@ApiTags(PrivateRoutesPath.COUNTRIES)
export class CountriesApiController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getCountries(): Promise<CountriesApiPayload[]> {
    return this.queryBus.execute(new GetCountriesQuery());
  }

  @Get(PrivateRoutesPath.COUNTRY)
  async getStates(@Param('countryName') countryName: string): Promise<CountriesApiPayload> {
    return this.queryBus.execute(new GetCitiesQuery(countryName));
  }

  @Get(PrivateRoutesPath.STATE)
  async getCities(@Param('stateName') stateName: string): Promise<CountriesApiPayload> {
    return this.queryBus.execute(new GetCitiesQuery(stateName));
  }
}
