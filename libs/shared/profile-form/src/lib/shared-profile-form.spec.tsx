import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SharedProfileForm from './shared-profile-form';

Enzyme.configure({ adapter: new Adapter() });

const data = [
  { _id: 'A', name: 'A' },
  { _id: 'B', name: 'B' },
  { _id: 'C', name: 'C' },
  { _id: 'D', name: 'D' },
  { _id: 'E', name: 'E' },
  { _id: 'F', name: 'F' },
];

const cities = ['Vilnius', 'Kaunas', 'Klaipėda'];

const countries = ['Lithuania', 'Latvia', 'Estonia'];

const onSubmit = jest.fn();

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

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const result = shallow(
      <SharedProfileForm
        profile={profile}
        onSubmit={onSubmit}
        categories={data}
        cities={cities}
        countries={countries}
      />
    );
    expect(result).toBeTruthy();
  });
});
