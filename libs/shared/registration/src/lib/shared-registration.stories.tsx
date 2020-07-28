
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SharedRegistration, SharedRegistrationProps  } from './shared-registration';
import { action, withActions } from '@storybook/addon-actions';

export default {
  component: SharedRegistration,
  title: 'SharedRegistration',
  decorators: [withKnobs, withActions('click')],
};

export const primary = () => {
  const onSubmit = action('onSubmit');
  const props: SharedRegistrationProps = {
    onSubmit
  };
  
  return <SharedRegistration {...props}  />;
};
