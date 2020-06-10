import React from 'react';
import { render } from '@testing-library/react';

import SharedTest from './shared-test';

describe(' SharedTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTest />);
    expect(baseElement).toBeTruthy();
  });
});
