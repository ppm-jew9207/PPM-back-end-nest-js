import React, { useState, ReactNode, MouseEvent } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

/* eslint-disable-next-line */
export interface SharedTopRightBarProps {}

interface Prop {
  items: string[];
  children: ReactNode;
}
const MenuButton = (props: Prop) => {
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
      <IconButton color="inherit" onClick={handleMenu}>
        {props.children}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={menuOpen}
        onClose={handleClose}
      >
        {props.items.map((link, index) => (
          <div key={index}>
            <MenuItem onClick={handleClose}>{link}</MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
};

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  return (
    <Toolbar>
      <MenuButton
        items={['Notification 1', 'Notification 2', 'Notification 3']}
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </MenuButton>

      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>

      <MenuButton items={['Profile 1', 'Profile 2', 'Profile 3']}>
        <AccountCircle />
      </MenuButton>
    </Toolbar>
  );
};

export default SharedTopRightBar;
