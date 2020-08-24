import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedForgotPasswordForm,
  SharedForgotPasswordFormProps,
} from './shared-forgot-password-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedForgotPasswordForm,
  title: 'SharedForgotPasswordForm',
  decorators: [withKnobs],
};

export const primary = () => {
  const props: SharedForgotPasswordFormProps = {
    onSubmit: action('onSubmit'),
    title: text('Form Title', 'Forgot password?'),
    subtitle: text(
      'Form subtitle',
      "No worries! Just enter your email and we'll send you a reset password link."
    ),
    submitButtonText: text('Submit button text', 'Reset password'),
    inputLabel: text('Text input lable', 'Email Address'),
  };

  return <SharedForgotPasswordForm {...props} />;
};
