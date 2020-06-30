import React from 'react';
import { SharedTopMenuButton } from '@ppm/shared/top-menu-button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from '@material-ui/core';
import './shared-top-right-bar.scss';

export interface SharedTopRightBarProps {
  dataFromDb: {
    notifications: {
      _id: string;
      title: string;
      path: string;
      timeStamp: string;
      isRead: boolean;
    }[];
    settings: { _id: string; label: string; path: string };
    profile: { _id: string; label: string; path: string };
  };
  children: any;
}

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  const { notifications, settings, profile } = props.dataFromDb;
  return (
    <Toolbar>
      {props.children}
      <Link href={settings.path}>
        <IconButton color="primary">
          <SettingsIcon />
        </IconButton>
      </Link>

      <Link href={profile.path}>
        <IconButton color="primary">
          <AccountCircle />
        </IconButton>
      </Link>
    </Toolbar>
  );
};

export default SharedTopRightBar;
