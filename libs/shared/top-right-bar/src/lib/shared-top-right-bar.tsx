import React from 'react';
import { SharedTopMenuButton } from '../../../top-menu-button/src/lib/shared-top-menu-button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

/* eslint-disable-next-line */
export interface SharedTopRightBarProps {}

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  return (
    <Toolbar>
      <SharedTopMenuButton
        items={['Notification 1', 'Notification 2', 'Notification 3']}
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </SharedTopMenuButton>

      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>

      <SharedTopMenuButton items={['Profile 1', 'Profile 2', 'Profile 3']}>
        <AccountCircle />
      </SharedTopMenuButton>
    </Toolbar>
  );
};

export default SharedTopRightBar;
