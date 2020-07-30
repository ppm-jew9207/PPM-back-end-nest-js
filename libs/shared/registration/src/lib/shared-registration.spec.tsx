import React from 'react';
import { render } from '@testing-library/react';

import SharedRegistration from './shared-registration';

describe(' SharedRegistration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedRegistration />);
    expect(baseElement).toBeTruthy();
  });
});
