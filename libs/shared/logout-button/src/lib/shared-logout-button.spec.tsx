import React from 'react';
import { render } from '@testing-library/react';

import SharedLogoutButton from './shared-logout-button';

describe('SharedLogoutButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLogoutButton />);
    expect(baseElement).toBeTruthy();
  });
});
