import React from 'react';
import {
  SharedRegistrationVerification,
  SharedRegistrationVerificationProps,
} from './shared-registration-verification';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: SharedRegistrationVerification,
  title: 'SharedRegistrationVerification',
  decorators: [withKnobs],
};

export const primary = () => {

  const code = text('Code', 'Input text' )

  const informationTitle = text('Information title', 'A verification code has been sent to your registration email')

  const props: SharedRegistrationVerificationProps = {
    code,
    informationTitle,
    onSubmit: action('onSubmit'),
    onCancel: action('onCancel'),
    resendVerification: action('onResendVerification'),
  };

  return (
    <SharedRegistrationVerification
      code={props.code}
      informationTitle={props.informationTitle}
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
      resendVerification={props.resendVerification}
    />
  );
};
