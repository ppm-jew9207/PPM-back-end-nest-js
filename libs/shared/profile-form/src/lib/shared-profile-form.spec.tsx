import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SharedProfileForm from './shared-profile-form';

Enzyme.configure({ adapter: new Adapter() });

const categories = [{ _id: 'fasdfasdf', title: 'Programming', value: 'programming'}];
const countries = [{ country_name: 'Lithuania'}, { country_name: 'Latvia'}, { country_name: 'Estonia' }];
const states = [{ state_name: 'Kauno'}, {state_name: 'Vilniaus'}];
const cities = [{city_name: 'Vilnius'}, { city_name: 'Kaunas'}, { city_name: 'Klaipėda'}];

const onSubmit = jest.fn();
const onSelectCountry = jest.fn();
const onSelectState = jest.fn();

const profile = {
  _id: 'sadfasf234122',
  categories: [],
  city: "Vilnius",
  company: "IBM",
  state: "Kauno",
  country: "Lithuania",
  description: "looong description",
  email: "gintarazzz@gmail.com",
  fieldOfProfession: "Super programmer",
  firstName: "Gintaras",
  lastName: "Kuskys",
  phone: "098204820837",
  photo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  socialLinks: [],
  type: "belekas",
  website: "gardemarin.com"
};

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const result = shallow(
      <SharedProfileForm
        onSelectCountry={onSelectCountry}
        onSelectState={onSelectState}
        profile={profile}
        onSubmit={onSubmit}
        categories={categories}
        countries={countries}
        states={states}
        cities={cities}
      />
    );
    expect(result).toBeTruthy();
  });
});
