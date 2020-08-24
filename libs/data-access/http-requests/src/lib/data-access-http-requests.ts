import { request } from './request';
import { PrivateRoutesPath, RegistrationInterface } from '@ppm/common/main';
import { getToken } from '@ppm/data-access/local-storage';

const headerOptions = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  Authorization: getToken(),
};
const requestOptions = {
  headers: new Headers(headerOptions),
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
