import React from 'react';
import {
  SharedTopMenuButton,
  SharedTopMenuButtonProps,
} from './shared-top-menu-button';
import { object } from '@storybook/addon-knobs';

export default {
  component: SharedTopMenuButton,
  title: 'SharedTopMenuButton',
};
const data = [
  {
    _id: '',
    title: 'Title',
    path: '',
    timeStamp: '',
    isRead: true,
  },
];

export const primary = () => {
  const props: SharedTopMenuButtonProps = {
    items: data,
    children: object('children', ''),
  };

  return <SharedTopMenuButton items={props.items}></SharedTopMenuButton>;
};
