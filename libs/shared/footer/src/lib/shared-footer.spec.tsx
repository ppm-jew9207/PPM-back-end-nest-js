import React from 'react';
import { render } from '@testing-library/react';

import SharedFooter from './shared-footer';

describe(' SharedFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFooter />);
    expect(baseElement).toBeTruthy();
  });
});
