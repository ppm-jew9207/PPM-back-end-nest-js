import React from 'react';
import { render } from '@testing-library/react';

import FeaturesSnackBar from './features-snack-bar';

describe(' FeaturesSnackBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesSnackBar />);
    expect(baseElement).toBeTruthy();
  });
});
