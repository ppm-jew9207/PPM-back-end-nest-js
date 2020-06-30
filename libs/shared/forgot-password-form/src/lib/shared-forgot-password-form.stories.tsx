import React from 'react';
import {
  SharedForgotPasswordForm,
  SharedForgotPasswordFormProps,
} from './shared-forgot-password-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedForgotPasswordForm,
  title: 'SharedForgotPasswordForm',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedForgotPasswordFormProps = {
    onSubmit: action('onSubmit'),
    title: 'Forgot password?',
    subtitle:
      "No worries! Just enter your email and we'll send you a reset password link.",
    submitButtonText: 'Reset password',
    inputLabel: 'Email Address',
  };

  return <SharedForgotPasswordForm {...props} />;
};
