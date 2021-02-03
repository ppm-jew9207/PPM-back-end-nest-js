import React from 'react';
import { render } from '@testing-library/react';

import SharedNavigation from './shared-navigation';

const buttons = [
  {
    label: 'Home',
    path: '/',
    icon: 'home',
    onClick: () => jest.fn(),
  },
  {
    label: 'About',
    path: '/About',
    icon: 'info',
    onClick: () => jest.fn(),
  },
  {
    label: 'Contacts',
    path: '/contacts',
    icon: 'contacts',
    onClick: () => jest.fn(),
  },
];

describe(' SharedNavigation', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedNavigation 
      buttons={buttons}
    />);
    expect(result).toBeTruthy();
  });
});
