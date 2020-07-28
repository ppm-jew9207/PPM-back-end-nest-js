import React from 'react';
import {
  SharedCreateAdvertForm,
  SharedCreateAdvertFormProps,
} from './shared-create-advert-form';

import { action } from '@storybook/addon-actions';

export default {
  component: SharedCreateAdvertForm,
  title: 'SharedCreateAdvertForm',
};

export const primary = () => {
  const props: SharedCreateAdvertFormProps = {
    onSubmit: action('onSubmit'),
    title: 'New advert?',
    submitButtonText: 'Create',
    titleInputLabel: 'Title',
    descriptionInputLabel: 'Description',
  };

  return <SharedCreateAdvertForm {...props} />;
};
