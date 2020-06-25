import React from 'react';
import { render } from '@testing-library/react';

import { SharedInfoCard } from './shared-info-card';

describe(' SharedInfoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedInfoCard />);
    expect(baseElement).toBeTruthy();
  });
});
