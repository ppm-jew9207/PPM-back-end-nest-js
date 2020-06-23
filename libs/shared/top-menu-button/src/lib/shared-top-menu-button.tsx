import React, { useState, MouseEvent, ReactNode } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

export interface SharedTopMenuButtonProps {
  items: string[];
  children: ReactNode;
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

export default SharedTopMenuButton;
