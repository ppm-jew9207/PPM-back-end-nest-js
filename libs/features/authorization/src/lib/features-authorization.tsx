import React from 'react';
import {
  authorizationActions
} from '@ppm/data-access/authorization';
import { useDispatch } from 'react-redux';
import { SharedLoginComponent } from '@ppm/shared/login-component';

export const FeaturesAuthorization = () => {
  const dispatch = useDispatch();

  const login = (loginData: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    dispatch(
      authorizationActions.logIn({
        email: loginData.email,
        password: loginData.password,
      })
    );
  };

  return (
    <div>
      <SharedLoginComponent onLogin={login} onForgotPassword={console.log} />
    </div>
  );
};

export default FeaturesAuthorization;
