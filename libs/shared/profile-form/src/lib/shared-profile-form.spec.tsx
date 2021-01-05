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

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const result = shallow(
      <SharedProfileForm
        onSubmit={onSubmit}
        categories={data}
        cities={cities}
        countries={countries}
      />
    );
    expect(result).toBeTruthy();
  });
});
