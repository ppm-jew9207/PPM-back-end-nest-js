import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { SharedModal, SharedModalProps } from './shared-modal';
import { action, withActions } from '@storybook/addon-actions';

export default {
  component: SharedModal,
  title: 'SharedModal',
  decorators: [withKnobs, withActions('click')],
};

export const primary = () => {
  const props: SharedModalProps = {
    title: text('Modal title', 'Test'),
    text: text('Modal text', 'Test 2'),
    submit: action('submit'),
    isModal: boolean('isOpen', true),
    isConfirmed: boolean('isConfirmed', true),
  };

  return (
    <SharedModal
      title={props.title}
      text={props.text}
      submit={props.submit}
      isModal={props.isModal}
      isConfirmed={props.isConfirmed}
    />
  );
};
