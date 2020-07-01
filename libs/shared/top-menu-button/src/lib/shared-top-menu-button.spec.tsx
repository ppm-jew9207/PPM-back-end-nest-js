import React from 'react';
import { render } from '@testing-library/react';

import SharedTopMenuButton from './shared-top-menu-button';

describe(' SharedTopMenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTopMenuButton />);
    expect(baseElement).toBeTruthy();
  });
});
