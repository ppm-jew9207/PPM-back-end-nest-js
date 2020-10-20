import React from 'react';
import { render } from '@testing-library/react';

import FeaturesPrivateLayout from './features-private-layout';

describe('FeaturesPrivateLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPrivateLayout />);
    expect(baseElement).toBeTruthy();
  });
});
