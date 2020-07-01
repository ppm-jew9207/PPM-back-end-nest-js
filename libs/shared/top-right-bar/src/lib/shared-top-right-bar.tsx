import React, { ReactNode } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from '@material-ui/core';
import './shared-top-right-bar.scss';

export interface MenuIconLink {
  _id: string;
  label: string;
  path: string;
}

export interface SharedTopRightBarProps {
  dataFromDb: {
    settings: MenuIconLink;
    profile: MenuIconLink;
  };
  children: ReactNode;
}

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  const { settings, profile } = props.dataFromDb;
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
