import React from 'react';
import { render } from '@testing-library/react';

import FeaturesDashboardMentor from './features-dashboard-mentor';

describe(' FeaturesDashboardMentor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesDashboardMentor />);
    expect(baseElement).toBeTruthy();
  });
});
