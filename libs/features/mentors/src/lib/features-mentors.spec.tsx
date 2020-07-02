import React from 'react';
import { render } from '@testing-library/react';

import FeaturesMentors from './features-mentors';

describe(' FeaturesMentors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesMentors />);
    expect(baseElement).toBeTruthy();
  });
});
