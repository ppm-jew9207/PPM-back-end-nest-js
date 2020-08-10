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

export const getAdverts = () => {
  const response = request(`/api/${PrivateRoutesPath.ADVERTS}`, {
    method: 'GET',
    ...requestOptions,
  });
  return response;
};

export const create = ({ data, path }) => {
  const response = request(`/api/${path}`, {
    body: JSON.stringify(data),
    method: 'POST',
    ...requestOptions,
  });
  return response;
};

export const update = ({ data, path }) => {
  const response = request(`/api/${path}/update/${data.id}`, {
    body: JSON.stringify(data),
    method: 'POST',
    ...requestOptions,
  });
  return response;
};

export const getById = ({ path, id }) => {
  const response = request(`/api/${path}/${id}`, {
    method: 'GET',
    ...requestOptions,
  });
  return response;
};

export const remove = ({ path, id }) => {
  const response = request(`/api/${path}/delete/${id}`, {
    method: 'POST',
    ...requestOptions,
  });
  return response;
};
