
import React from 'react';
import { SharedLogoutButton, SharedLogoutButtonProps  } from './shared-logout-button';
import { action } from '@storybook/addon-actions';
export default {
  component: SharedLogoutButton,
  title: 'SharedLogoutButton'
};

export const primary = () => {
  
  
  const props:SharedLogoutButtonProps = {
    confirmLogout: action('confirmLogout'),
  };
  

  return <SharedLogoutButton confirmLogout = {props.confirmLogout}  />;
};