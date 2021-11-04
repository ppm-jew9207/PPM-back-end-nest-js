import React, { useState, MouseEvent, ReactNode } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export interface Items {
  _id: string;
  title: string;
  path: string;
  timeStamp: string;
  isRead: boolean;
}

export interface SharedTopMenuButtonProps {
  items: Items[];
  children?: ReactNode;
}

export const SharedTopMenuButton = (props: SharedTopMenuButtonProps) => {
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
              <Link component={RouterLink} to={link.path}>
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

export default SharedTopMenuButton;
