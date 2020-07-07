import React from 'react';
import { render } from '@testing-library/react';

import SharedProfileForm from './shared-profile-form';

const data = [
  { id: 'a', name: 'A' },
  { id: 'b', name: 'B' },
  { id: 'c', name: 'C' },
  { id: 'd', name: 'D' },
  { id: 'e', name: 'E' },
];

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SharedProfileForm
        onSubmit={(e) => console.log(e)}
        categories={data}
        cities={data}
        countries={data}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
