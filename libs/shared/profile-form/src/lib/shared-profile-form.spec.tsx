import React from 'react';
import { render } from '@testing-library/react';

import SharedProfileForm from './shared-profile-form';

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

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const result = render(
      <SharedProfileForm
        onSubmit={(e) => console.log(e)}
        categories={data}
        cities={cities}
        countries={countries}
      />
    );
    expect(result).toBeTruthy();
  });
});
