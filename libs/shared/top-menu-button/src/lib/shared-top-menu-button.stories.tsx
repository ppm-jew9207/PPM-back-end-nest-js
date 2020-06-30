import React from 'react';
import { SharedTopMenuButton, SharedTopMenuButtonProps  } from './shared-top-menu-button';

export default {
  component: SharedTopMenuButton,
  title: 'SharedTopMenuButton'
};
const data = [
  {
    _id: '',
    title: '',
    path: '',
    timeStamp: '',
    isRead: true,
  },
];

export const primary = () => {
  const props: SharedTopMenuButtonProps = {
    items: data,
  };

return <SharedTopMenuButton items={props.items}></SharedTopMenuButton>;
};
