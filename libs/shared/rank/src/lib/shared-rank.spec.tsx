import React from 'react';
import { render } from '@testing-library/react';

import SharedRank from './shared-rank';

describe(' SharedRank', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedRank />);
    expect(baseElement).toBeTruthy();
  });
});
