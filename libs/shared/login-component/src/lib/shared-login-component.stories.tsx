import React from 'react';
import {
  SharedLoginComponent,
  SharedLoginComponentProps,
} from './shared-login-component';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedLoginComponent,
  title: 'SharedLoginComponent',
};

export const primary = () => {
  const props: SharedLoginComponentProps = {
    onLogin: action('onLogin'),
  };

  return <SharedLoginComponent onLogin={props.onLogin} />;
};
