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
}

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  const { notifications, settings, profile } = props.dataFromDb;
  return (
    <Toolbar>
      <SharedTopMenuButton items={notifications}>
        <Badge badgeContent={notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </SharedTopMenuButton>

      <Link href={settings.path}>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Link>

      <Link href={profile.path}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Link>
    </Toolbar>
  );
};

export default SharedTopRightBar;
