import React from 'react';
import { render } from '@testing-library/react';

import SharedProfileForm from './shared-profile-form';

describe(' SharedProfileForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedProfileForm />);
    expect(baseElement).toBeTruthy();
  });
});
