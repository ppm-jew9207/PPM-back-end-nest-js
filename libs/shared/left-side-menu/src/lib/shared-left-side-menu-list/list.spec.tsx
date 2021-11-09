import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import List from './list';

const menuItemsArray = [
  {
    name: 'Profile',
    path: '/',
    icon: 'dashboard_rounded',
  },
  {
    name: 'Password',
    path: '/',
    icon: 'person_outlined_rounded',
  },
  {
    name: 'Certificates',
    path: '/',
    icon: 'list_alt_rounded',
  },
];

describe(' List', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <List menuItemsArray={menuItemsArray} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
