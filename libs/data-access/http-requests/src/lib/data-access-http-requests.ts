import { request } from './request';
import { PrivateRoutesPath, RegistrationInterface } from '@ppm/common/main';
import { getToken } from '@ppm/data-access/local-storage';

const generalOptions = {
  Accept: 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  Authorization: getToken(),
};

const headerOptions = {
  ...generalOptions,
  'Content-Type': 'application/json',
};

const requestOptions = {
  headers: new Headers(headerOptions),
};

const fileRequestOptions = {
  headers: new Headers(generalOptions),
};

export const login = (data) => {
  const response = request(
    `/api/${PrivateRoutesPath.AUTH}${PrivateRoutesPath.POST_LOGIN}`,
    {
      body: JSON.stringify(data),
      method: 'POST',
      ...requestOptions,
    }
  );
  return response;
};

export const registration = (data: RegistrationInterface) => {
  const response = request(
    `/api/${PrivateRoutesPath.AUTH}${PrivateRoutesPath.POST_REGISTRY}`,
    {
      body: JSON.stringify(data),
      method: 'POST',
      ...requestOptions,
    }
  );
  return response;
};

export const verify = (code: string) => {
  const response = request(
    `/api/${PrivateRoutesPath.AUTH}${PrivateRoutesPath.POST_VERIFY_FE}${code}`,
    {
      method: 'GET',
      ...requestOptions,
    }
  );
  return response;
};

export const get = (path) => {
  const response = request(path, {
    method: 'GET',
    ...requestOptions,
  });
  return response;
};

export const post = (path, data = {}) => {
  const response = request(path, {
    body: JSON.stringify(data),
    method: 'POST',
    ...requestOptions,
  });
  return response;
};

export const postFormData = (path, data) => {
  const response: any = request(path, {
    body: data,
    method: 'POST',
    ...fileRequestOptions,
  });
  return response;
};
