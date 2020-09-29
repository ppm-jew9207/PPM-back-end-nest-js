import React from 'react';
import { render } from '@testing-library/react';

import FeaturesProfile from './features-profile';

describe(' FeaturesProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesProfile />);
    expect(baseElement).toBeTruthy();
  });
});
