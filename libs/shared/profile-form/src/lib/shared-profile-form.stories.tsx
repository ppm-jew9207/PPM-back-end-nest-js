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

const categories = [
  { _id: 'fasdfasdf', title: 'Programming', value: 'programming' },
];
const countries = [
  { countryName: 'Lithuania' },
  { countryName: 'Latvia' },
  { countryName: 'Estonia' },
];
const states = [{ stateName: 'Kauno' }, { stateName: 'Vilniaus' }];
const cities = [
  { cityName: 'Vilnius' },
  { cityName: 'Kaunas' },
  { cityName: 'Klaipėda' },
];

const profile = {
  _id: 'sadfasf234122',
  categories: [],
  city: 'Vilnius',
  company: 'IBM',
  state: 'Kauno',
  country: 'Lithuania',
  description: 'looong description',
  email: 'gintarazzz@gmail.com',
  fieldOfProfession: 'Super programmer',
  firstName: 'Gintaras',
  lastName: 'Kuskys',
  phone: '098204820837',
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
  socialLinks: [],
  type: 'belekas',
  website: 'gardemarin.com',
};

export const primary = () => {
  const props: SharedProfileFormProps = {
    onSubmit: action('onSubmit'),
    onSelectCountry: action('onSelectCountry'),
    onSelectState: action('onSelectState'),
    onAddCategory: action('onAddCategory'),
    categories: categories,
    cities: cities,
    states: states,
    countries: countries,
    profile: profile,
  };

  return (
    <SharedProfileForm
      onSubmit={props.onSubmit}
      onSelectCountry={props.onSelectCountry}
      onSelectState={props.onSelectState}
      onAddCategory={props.onAddCategory}
      categories={props.categories}
      cities={props.cities}
      countries={props.countries}
      states={props.states}
      profile={props.profile}
    />
  );
};
