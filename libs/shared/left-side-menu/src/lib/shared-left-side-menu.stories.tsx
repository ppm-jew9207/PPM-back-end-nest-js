import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import {
  SharedLeftSideMenu,
  SharedLeftSideMenuProps,
} from './shared-left-side-menu';

export default {
  component: SharedLeftSideMenu,
  title: 'SharedLeftSideMenu',
  decorators: [withKnobs],
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
  const props: SharedLeftSideMenuProps = {
    menuItemsArray,
  };

  return <SharedLeftSideMenu {...props} />;
};
