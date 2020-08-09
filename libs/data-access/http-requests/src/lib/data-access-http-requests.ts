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

export const create = ({ data, table }) => {
  const response = request(`/api/${table}`, {
    body: JSON.stringify(data),
    method: 'POST',
    ...requestOptions,
  });
  return response;
};

export const update = ({ data, table }) => {
  const response = request(`/api/${table}/update/${data.id}`, {
    body: JSON.stringify(data),
    method: 'POST',
    ...requestOptions,
  });
  return response;
};

export const getById = ({ table, id }) => {
  const response = request(`/api/${table}/${id}`, {
    method: 'GET',
    ...requestOptions,
  });
  return response;
};

export const remove = ({ table, id }) => {
  const response = request(`/api/${table}/delete/${id}`, {
    method: 'POST',
    ...requestOptions,
  });
  return response;
};
