
import React from 'react';
import { SharedLoginComponent, SharedLoginComponentProps  } from './shared-login-component';

export default {
  component: SharedLoginComponent,
  title: 'SharedLoginComponent'
};

export const primary = () => {


  const props:SharedLoginComponentProps = {
    login: ('login', ),
  };


  return <SharedLoginComponent login = {props.login}  />;
};
