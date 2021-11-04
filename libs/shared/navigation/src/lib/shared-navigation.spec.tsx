import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <SharedNavigation buttons={buttons} />
      </Router>
    );
    expect(result).toBeTruthy();
  });
});
