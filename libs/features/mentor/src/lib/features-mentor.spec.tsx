import React from 'react';
import { render } from '@testing-library/react';

import FeaturesMentor from './features-mentor';

describe(' FeaturesMentor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesMentor />);
    expect(baseElement).toBeTruthy();
  });
});
