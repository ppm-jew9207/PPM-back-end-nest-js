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
const profile = {
  "categories" : [],
  "city" : "Vilnius",
  "company" : "IBM",
  "country" : "Lithuania",
  "description" : "looong description",
  "email" : "gintarazzz@gmail.com",
  "fieldOfProfession" : "Super programmer",
  "firstName" : "Gintaras",
  "lastName" : "Kuskys",
  "phone" : "098204820837",
  "photo" : "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  "socialLinks" : [],
  "type" : "belekas",
  "website" : "gardemarin.com"
};

export const primary = () => {
  const props: SharedProfileFormProps = {
    onSubmit: action('onSubmit'),
    categories: data,
    cities: cities,
    countries: countries,
    profile: profile
  };

  return (
    <SharedProfileForm
      onSubmit={props.onSubmit}
      categories={props.categories}
      cities={props.cities}
      countries={props.countries}
      profile={props.profile}
    />
  );
};
