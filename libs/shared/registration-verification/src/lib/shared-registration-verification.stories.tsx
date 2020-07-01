import React from 'react';
import {
  SharedRegistrationVerification,
  SharedRegistrationVerificationProps,
} from './shared-registration-verification';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedRegistrationVerification,
  title: 'SharedRegistrationVerification',
};

export const primary = () => {
  const props: SharedRegistrationVerificationProps = {
    onSubmit: action('onSubmit'),
    onCancel: action('onCancel'),
    resendVerification: action('onResendVerification'),
  };

  return (
    <SharedRegistrationVerification
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
      resendVerification={props.resendVerification}
    />
  );
};
