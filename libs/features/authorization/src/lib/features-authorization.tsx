import React, { useEffect } from 'react';
import {authorizationActions, authorizationSelectors} from '@ppm/data-access/authorization';
import { useDispatch, useSelector } from 'react-redux';
import { SharedLoginComponent } from '@ppm/shared/login-component';
import { createStructuredSelector } from 'reselect';
import { getToken } from '@ppm/data-access/local-storage';
import { PrivateRoutesPath } from '@ppm/common/main';

const stateSelector = createStructuredSelector({
  isLogged: authorizationSelectors.selectIsLogged(),
  loading: authorizationSelectors.selectLoading()
});

export const FeaturesAuthorization = ({history}) => {
  const dispatch = useDispatch();
  const { isLogged, loading } = useSelector(stateSelector);
  
  useEffect(() => {    
    if(isLogged || !!getToken()){
      history.push(`/${PrivateRoutesPath.MENTOR}${PrivateRoutesPath.GET_ALL}`);
    }
  });

  const login = (loginData: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {    
    dispatch(authorizationActions.logIn({email: loginData.email, password: loginData.password}));
  }

  return (
    <div>
      <SharedLoginComponent onLogin={login} onForgotPassword={console.log}/>
    </div>
  );
};

export default FeaturesAuthorization;
