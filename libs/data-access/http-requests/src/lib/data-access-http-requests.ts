import { request } from './request';
import { PrivateRoutesPath } from '@ppm/common/main';

const headerOptions = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
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

export const getAdverts = () => {
  const response = request(`/api/${PrivateRoutesPath.ADVERTS}`, {
    method: 'GET',
    ...requestOptions,
  });
  return response;
};
