import React from 'react';
import { render } from '@testing-library/react';

import SharedTopRightBar from './shared-top-right-bar';

describe(' SharedTopRightBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTopRightBar />);
    expect(baseElement).toBeTruthy();
  });
});
