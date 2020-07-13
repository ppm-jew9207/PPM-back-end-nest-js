import React from 'react';
import { render } from '@testing-library/react';

import SharedSearchInput from './shared-search-input';

describe(' SharedSearchInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSearchInput />);
    expect(baseElement).toBeTruthy();
  });
});
