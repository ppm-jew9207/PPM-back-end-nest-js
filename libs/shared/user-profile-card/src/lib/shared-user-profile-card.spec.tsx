import React from 'react';
import { render } from '@testing-library/react';

import SharedUserProfileCard from './shared-user-profile-card';

describe(' SharedUserProfileCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUserProfileCard />);
    expect(baseElement).toBeTruthy();
  });
});
