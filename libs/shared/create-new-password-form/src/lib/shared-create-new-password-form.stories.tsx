import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedCreateNewPasswordForm, SharedCreateNewPasswordFormProps  } from './shared-create-new-password-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedCreateNewPasswordForm,
  title: 'SharedCreateNewPasswordForm',
  decorators: [withKnobs],
};

export const primary = () => {
  
  
  const props:SharedCreateNewPasswordFormProps = {
    onSubmit: action('onSubmit'),
    title: text('title', 'Create new password'),
    subtitle: text('subtitle', ''),
  };
  

  return <SharedCreateNewPasswordForm {...props}  />;
};
