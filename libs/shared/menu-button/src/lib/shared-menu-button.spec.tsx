import React from 'react';
import { render } from '@testing-library/react';

import SharedMenuButton from './shared-menu-button';

describe(' SharedMenuButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedMenuButton />);
    expect(baseElement).toBeTruthy();
  });
});
