import request from './request';
import { PrivateRoutesPath } from '@ppm/common/main';

const login = (data) => {
  const response = request(
    `/api/${PrivateRoutesPath.AUTH}${PrivateRoutesPath.POST_LOGIN}`,
    {
      body: data,
      method: 'POST',
    }
  );
  return response;
};
const getAdverts = () => {
  const response = request(`/api/${PrivateRoutesPath.ADVERTS}`, {
    method: 'GET',
  });
  return response;
};

export const Authorize = {
  login,
};

export const Adverts = {
  getAdverts,
};
