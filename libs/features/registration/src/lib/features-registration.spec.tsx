import React from 'react';
import { render } from '@testing-library/react';

import FeaturesRegistration from './features-registration';

describe(' FeaturesRegistration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesRegistration />);
    expect(baseElement).toBeTruthy();
  });
});
