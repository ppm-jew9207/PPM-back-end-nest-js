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
  { _id: 'A', name: 'A' },
  { _id: 'B', name: 'B' },
  { _id: 'C', name: 'C' },
  { _id: 'D', name: 'D' },
  { _id: 'E', name: 'E' },
  { _id: 'F', name: 'F' },
];

const cities = ['Vilnius','Kaunas', 'Klaipėda'];

const countries = ['Lithuania', 'Latvia','Estonia'];


export const primary = () => {
  const props: SharedProfileFormProps = {
    onSubmit: action('onSubmit'),
    categories: data,
    cities: cities,
    countries: countries,
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
