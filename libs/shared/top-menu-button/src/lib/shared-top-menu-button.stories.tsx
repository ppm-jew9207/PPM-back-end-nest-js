import React from 'react';
import { SharedTopMenuButton, SharedTopMenuButtonProps  } from './shared-top-menu-button';

export default {
  component: SharedTopMenuButton,
  title: 'SharedTopMenuButton'
};

export const primary = () => {
  
  
  const props:SharedTopMenuButtonProps = {
    items: ('items', ),
    children: ('children', ),
  };
  

  return <SharedTopMenuButton items = {props.items} children = {props.children}  />;
};
