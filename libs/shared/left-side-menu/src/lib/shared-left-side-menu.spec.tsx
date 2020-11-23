import React from 'react';
import { render } from '@testing-library/react';

import SharedLeftSideMenu from './shared-left-side-menu';

const menuItemsArray = [
  {
    'name': 'Profile',
    'path': '/',
    'icon': 'dashboard_rounded'
  },
  {
    'name': 'Password',
    'path': '/',
    'icon': 'person_outlined_rounded'
  },
  {
    'name': 'Certificates',
    'path': '/',
    'icon': 'list_alt_rounded'
  },
];

const title = 'Settings';

describe(' SharedLeftSideMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLeftSideMenu menuItemsArray={menuItemsArray} title={title}/>);
    expect(baseElement).toBeTruthy();
  });
});
