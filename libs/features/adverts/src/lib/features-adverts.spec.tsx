import React from 'react';
import { render } from '@testing-library/react';

import FeaturesAdverts from './features-adverts';

describe(' FeaturesAdverts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAdverts />);
    expect(baseElement).toBeTruthy();
  });
});
