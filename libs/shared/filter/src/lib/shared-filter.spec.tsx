import React from 'react';
import { render } from '@testing-library/react';

import SharedFilter from './shared-filter';

describe('SharedFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFilter />);
    expect(baseElement).toBeTruthy();
  });
});
