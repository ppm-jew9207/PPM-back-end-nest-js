import React from 'react';
import { SharedNavigation, SharedNavigationProps } from './shared-navigation';

export default {
  component: SharedNavigation,
  title: 'SharedNavigation',
};
const callName = (id: string): void => {
  console.log(id);
};

const buttons = [
  {
    label: 'Home',
    path: '/',
    icon: 'home',
    onClick: () => callName('home1'),
  },
  {
    label: 'About',
    path: '/About',
    icon: 'info',
    onClick: () => callName('home2'),
  },
  {
    label: 'Contacts',
    path: '/contacts',
    icon: 'contacts',
    onClick: () => callName('home3'),
  },
];

export const primary = () => {
  const props: SharedNavigationProps = {
    buttons: buttons,
  };

  return <SharedNavigation buttons={props.buttons} />;
};
