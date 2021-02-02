import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import axios, { AxiosResponse } from 'axios';

import { ViewModels } from '../../helpers/constants';
import {
  CountriesApiViewModel,
  CountriesApiPayload,
} from './countriesApi.interface';

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
  // async saveAccessToken(id: string, data: CountriesApiPayload): Promise<void> {
  //   await this._model.findOneAndUpdate({ _id: Types.ObjectId(id) }, data, {
  //     upsert: true,
  //     new: true,
  //   });
  // }

  async getAccessTokenFromApi():Promise<String> {
    return axios.get("https://www.universal-tutorial.com/api/getaccesstoken", { headers: GET_TOKEN_REQ_HEADERS })
    .then((apiResult: { data: { auth_token: string } }) => {
      return apiResult.data.auth_token;
    })
    .catch(error => {
      return error;
    });
  }

  async getAccessTokenFromDB():Promise<String> {
    const apiRequest = this._model.findOne({}).exec();
    return apiRequest.then( response => {
      return response;
    }).catch(error => {
      return error;
    });
  }

  async getToken():Promise<String> {
    return this.getAccessTokenFromDB().then(result => {
      if (!result) {
        return this.getAccessTokenFromApi().then( apiResult => {
          return apiResult;
        })
      }
      return result;
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
    return this.getHeaders().then(async headers => {
      try {
        const countriesResult = await axios.get("https://www.universal-tutorial.com/api/countries/", { headers });
        return countriesResult.data;
      } catch (error) {
        return error;
      }
    });
  }

  async getStates(countryName: string): Promise<CountriesApiViewModel[]> {
    return axios.get(`https://www.universal-tutorial.com/api/states/${countryName}`, { headers: REQ_HEADERS });
  }

  async getCities(stateName: string): Promise<CountriesApiViewModel[]> {
    return axios.get(`https://www.universal-tutorial.com/api/cities/${stateName}`, { headers: REQ_HEADERS });
  }
}
