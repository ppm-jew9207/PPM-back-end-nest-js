import React from 'react';
import { render } from '@testing-library/react';

import SharedRegistrationVerification from './shared-registration-verification';

describe(' SharedRegistrationVerification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedRegistrationVerification />);
    expect(baseElement).toBeTruthy();
  });
});
