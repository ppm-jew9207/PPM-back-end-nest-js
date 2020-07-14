import React, { useState, MouseEvent, ReactNode } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './shared-top-right-bar.scss';

export interface Items {
  _id: string;
  title: string;
  path: string;
  timeStamp: string;
  isRead: boolean;
}

export interface SharedTopMenuButtonProps {
  items?: Items[];
  children: ReactNode;
}

export interface MenuIconLink {
  _id: string;
  label: string;
  path: string;
}

export interface SharedTopRightBarProps {
  dataFromDb?: {
    settings: MenuIconLink;
    profile: MenuIconLink;
    notifications: Items[];
  };
}

const SharedTopMenuButton = (props: SharedTopMenuButtonProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleMenu}>
        {props.children}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={menuOpen}
        onClose={handleClose}
      >
        {props.items.map((link) => (
          <div key={link._id}>
            <MenuItem onClick={handleClose}>
              <Link href={link.path}>
                <div className="container">
                  <div>{link.title}</div>
                  <div>{link.timeStamp}</div>
                </div>
              </Link>
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
};

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
