import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedCreateAdvertForm,
  SharedCreateAdvertFormProps,
} from './shared-create-advert-form';

import { action } from '@storybook/addon-actions';

export default {
  component: SharedCreateAdvertForm,
  title: 'SharedCreateAdvertForm',
  decorators: [withKnobs],
};

export const primary = () => {
  const props: SharedCreateAdvertFormProps = {
    onSubmit: action('onSubmit'),
    title: text('Advert Name', 'New advert?'),
    submitButtonText: text('Button text', 'Create'),
    titleInputLabel: text('Advert Title', 'Title'),
    descriptionInputLabel: text('Advert Description', 'Description'),
  };

  return <SharedCreateAdvertForm {...props} />;
};
