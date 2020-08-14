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
    data: {
      title: 'New advert?',
      submitButtonText: 'Create',
      titleInputLabel: 'Title',
      descriptionInputLabel: 'Description',
      category: 'category-a',
      imageUrl: '',
    },
    categories: [
      { title: 'Category A', value: 'category-a', _id: 'as3dg432af' },
      { title: 'Category B', value: 'category-b', _id: 'as33dg4432af' },
    ],
  };

  return <SharedCreateAdvertForm {...props} />;
};
