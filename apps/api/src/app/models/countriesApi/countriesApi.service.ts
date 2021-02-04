import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { ViewModels } from '../../helpers/constants';
import {
  CountriesApiViewModel,
  StatesApiViewModel,
  CitiesApiViewModel,
} from './countriesApi.interface';

const COUNTRIES_API_BASE_URL = 'https://www.universal-tutorial.com/api';

const GET_TOKEN_REQ_HEADERS = {
  "Accept": "application/json",
  "api-token": process.env.COUNTRIES_API_KEY,
  "user-email": process.env.COUNTRIES_API_EMAIL,
};

const REQ_HEADERS = {
  "Authorization": `Bearer ${process.env.COUNTRIES_API_TOKEN}`,
  "Accept": "application/json"
};

@Injectable()
export class CountriesApiModelService {
  @InjectModel(ViewModels.COUNTRIES_API_VIEW) private _model!: Model<
    CountriesApiViewModel
  >;
  async saveAccessToken(token: string): Promise<void> {
    await this._model.findOneAndUpdate({ }, { token }, {
      upsert: true,
      new: true,
    });
  }

  async getAccessTokenFromApi():Promise<string> {
    return axios.get(`${COUNTRIES_API_BASE_URL}/getaccesstoken`, { headers: GET_TOKEN_REQ_HEADERS })
    .then((apiResult: { data: { auth_token: string } }) => {
      return apiResult.data.auth_token;
    })
    .catch(error => {
      return error;
    });
  }

  async getAccessTokenFromDB():Promise<{ token: string }> {
    const apiRequest = this._model.findOne({}).exec();
    return apiRequest.then( response => {
      return response;
    }).catch(error => {
      return error;
    });
  }

  async getToken():Promise<String> {
    return this.getAccessTokenFromDB().then((result: { token: string }) => {
      if (!result) {
        return this.getAccessTokenFromApi().then((apiResult: string) => {
          this.saveAccessToken(apiResult);
          return apiResult;
        })
      }
      return result.token;
    }).catch( error => {
      return error;
    });
  }

  async getHeaders(): Promise<{ Authorization: string, Accept: string }> {
    const tokenRequest = this.getToken();
    return tokenRequest.then(async token => {
      if (token) {
        REQ_HEADERS['Authorization'] = `Bearer ${token}`;
        return REQ_HEADERS;
      }
    });
  }

  async getCountries(): Promise<CountriesApiViewModel[]> {
    return this.getData({ path: `${COUNTRIES_API_BASE_URL}/countries/`, param: ''});
  }

  async getStates(countryName: string): Promise<StatesApiViewModel[]> {
    return this.getData({ path: `${COUNTRIES_API_BASE_URL}/states/`, param: countryName});
  }

  async getCities(stateName: string): Promise<CitiesApiViewModel[]> {
    return this.getData({ path: `${COUNTRIES_API_BASE_URL}/cities/`, param: stateName});
  }

  async getData({ path, param }) {
    return this.getHeaders().then(async headers => {
      return await axios.get(`${path}${param}`, { headers })
      .then((response) => {
        return response.data;
      }).catch(async () => {
        const apiResult = await this.getAccessTokenFromApi();
        return await this.saveAccessToken(apiResult).then(() => {
          return this.getData({ path, param });
        });
      });
    }).catch(error => {
      return error;
    });
  }
}
