import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
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
      {
        'name': 'My Orders',
        'path': '/',
        'icon': 'text_fields_rounded'
      },
      {
        'name': 'Experience',
        'path': '/',
        'icon': 'apps_rounded'
      },
      {
        'name': 'Job Preferences',
        'path': '/',
        'icon': 'room_rounded'
      },
      {
        'name': 'Blockchain',
        'path': '/',
        'icon': 'notifications_none_rounded'
      }
    ]
  );

  const title = text('Title', 'Settings');

  const props: SharedLeftSideMenuProps = {
    menuItemsArray,
    title
  };

  return <SharedLeftSideMenu {...props} />;
};
