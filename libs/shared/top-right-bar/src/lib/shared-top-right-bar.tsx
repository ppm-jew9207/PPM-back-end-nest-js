import React, { useState, MouseEvent, ReactNode } from 'react';
import './shared-top-right-bar.scss';

import {
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Badge,
  PopoverOrigin,
  Link,
} from '@material-ui/core';

import {
  AccountCircle,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';

export interface Notifications {
  _id: string;
  title: string;
  path: string;
  timeStamp: string;
  isRead: boolean;
}

export interface SharedTopMenuButtonProps {
  children: ReactNode;
  items: Notifications[];
}

export interface MenuIconLink {
  _id: string;
  label: string;
  path: string;
}

export interface SharedTopRightBarProps {
  settings: MenuIconLink;
  profile: MenuIconLink;
  notifications: Notifications[];
}

export interface MenuProps {
  vertical: string;
  horizontal: string;
}

const menuPosition: PopoverOrigin = { vertical: 'top', horizontal: 'right' };

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

      {!!props.items.length && (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={menuPosition}
          transformOrigin={menuPosition}
          open={menuOpen}
          onClose={handleClose}
        >
          {props.items.map((link) => {
            return (
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
            );
          })}
        </Menu>
      )}
    </div>
  );
};

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  return (
    <Toolbar>
      <SharedTopMenuButton items={props.notifications}>
        <Badge badgeContent={props.notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </SharedTopMenuButton>

      <Link href={props.settings.path}>
        <IconButton color="primary">
          <SettingsIcon />
        </IconButton>
      </Link>

      <Link href={props.profile.path}>
        <IconButton color="primary">
          <AccountCircle />
        </IconButton>
      </Link>
    </Toolbar>
  );
};

export default SharedTopRightBar;
