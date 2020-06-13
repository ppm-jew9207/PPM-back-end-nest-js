import React from 'react';
import {
  SharedLoginComponent,
  SharedLoginComponentProps,
} from './shared-login-component';
import { actions } from '@storybook/addon-actions';

export default {
  component: SharedLoginComponent,
  title: 'SharedLoginComponent',
};

export const primary = () => {
  const props: SharedLoginComponentProps = {
    onLogin: actions('onLogin'),
  };

  return <SharedLoginComponent onLogin={props.onLogin} />;
};
