import React from 'react';
import { render } from '@testing-library/react';

import { SharedAdvertCard } from './shared-advert-card';

describe(' SharedAdvertCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedAdvertCard />);
    expect(baseElement).toBeTruthy();
  });
});
