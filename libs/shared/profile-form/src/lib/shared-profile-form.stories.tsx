import React from 'react';
import {
  SharedProfileForm,
  SharedProfileFormProps,
} from './shared-profile-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedProfileForm,
  title: 'SharedProfileForm',
};
const data = [
  { id: 'A', name: 'A' },
  { id: 'B', name: 'B' },
  { id: 'C', name: 'C' },
  { id: 'D', name: 'D' },
  { id: 'E', name: 'E' },
  { id: 'F', name: 'F' },
];
export const primary = () => {
  const props: SharedProfileFormProps = {
    onSubmit: action('onSubmit'),
    categories: data,
    cities: data,
    countries: data,
  };

  return (
    <SharedProfileForm
      onSubmit={props.onSubmit}
      categories={props.categories}
      cities={props.cities}
      countries={props.countries}
    />
  );
};
