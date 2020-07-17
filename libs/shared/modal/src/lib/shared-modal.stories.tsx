import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SharedModal } from './shared-modal';
import { action, withActions } from '@storybook/addon-actions';

export default {
  component: SharedModal,
  title: 'SharedModal',
  decorators: [withKnobs, withActions('click')],
};

export const primary = () => {
  const isOpen = boolean('isOpen', true);
  const isConfirmed = boolean('isConfirmed', true);

  return (
    <SharedModal
      title="Test"
      text="Test 2"
      submit={action('submit')}
      isModal={isOpen}
      isConfirmed={isConfirmed}
    />
  );
};
