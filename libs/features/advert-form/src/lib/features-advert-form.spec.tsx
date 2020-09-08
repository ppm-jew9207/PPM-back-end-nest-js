import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAdvertForm from './features-advert-form';

describe(' FeaturesAdvertForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAdvertForm />);
    expect(baseElement).toBeTruthy();
  });
});
