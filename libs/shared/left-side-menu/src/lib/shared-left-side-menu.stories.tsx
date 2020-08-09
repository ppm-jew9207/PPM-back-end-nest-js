import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import {
  LeftSideMenu,
  LeftSideMenuProps,
} from './shared-left-side-menu';

export default {
  component: LeftSideMenu,
  title: 'LeftSideMenu',
  decorators: [withKnobs]
};

export const primary = () => {

  const menuItemsArray = object('Selections array', 
    [
      {
        'name': 'Profile',
        'path': '/'
      },
      {
        'name': 'Password',
        'path': '/'
      },
      {
        'name': 'Certificates',
        'path': '/'
      },
      {
        'name': 'My Orders',
        'path': '/'
      },
      {
        'name': 'Experience',
        'path': '/'
      },
      {
        'name': 'Job Preferences',
        'path': '/'
      },
      {
        'name': 'Blockchain',
        'path': '/'
      }
    ]
  );

  /* eslint-disable-next-line */
  const props: LeftSideMenuProps = {
    menuItemsArray,
  };

  return <LeftSideMenu {...props}/>;
};
