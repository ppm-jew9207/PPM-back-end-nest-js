import React, {useEffect} from 'react';
import {authorizationActions} from '@ppm/data-access/authorization';
import { useDispatch } from 'react-redux';
import { SharedLoginComponent } from '@ppm/shared/login-component';
/* eslint-disable-next-line */
export interface FeaturesAuthorizationProps {}

export const FeaturesAuthorization = (props: FeaturesAuthorizationProps) => {
  const dispatch = useDispatch();

  const login = (loginData: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => {
    console.log(loginData);
    
    dispatch(authorizationActions.logIn({email: loginData.username, password: loginData.password}));
  }

  return (
    <div>
      <SharedLoginComponent onLogin={login} onForgotPassword={console.log}/>
    </div>
  );
};

export default FeaturesAuthorization;
