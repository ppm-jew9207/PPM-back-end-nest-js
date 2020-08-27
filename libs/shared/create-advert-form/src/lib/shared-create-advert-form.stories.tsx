import { withKnobs } from '@storybook/addon-knobs';
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
    data: {
      title: 'New advert',
      submitButtonText: 'Create',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'New Advert',
      categoryInputLabel: 'Category',
    },
    categories: [
      { title: 'Category A', value: 'category-a', _id: 'as3dg432af' },
      { title: 'Category B', value: 'category-b', _id: 'as33dg4432af' },
    ],
  };

  return <SharedCreateAdvertForm {...props} />;
};
