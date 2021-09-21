import React, { useState } from 'react';
import LeftSideMenuList from './shared-left-side-menu-list/list';
import './shared-left-side-menu.scss';
import { Drawer, Typography, IconButton } from '@material-ui/core';
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import { getToken } from '@ppm/data-access/local-storage';
interface Type {
  name: string;
  path: string;
  icon: string;
}

export interface SharedLeftSideMenuProps {
  title: string;
  menuItemsArray: Type[];
}

export const SharedLeftSideMenu = (props: SharedLeftSideMenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!getToken();
  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <div>
      {isLoggedIn && (
        <Hidden mdUp>
          <div className="shared-left-side-menu-button">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer(true)}
              edge="start"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Hidden>
      )}
      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
      >
        <div className="shared-left-side-menu">
          <IconButton
            onClick={() => toggleDrawer(false)}
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
          <LeftSideMenuList menuItemsArray={props.menuItemsArray} />
        </div>
      </Drawer>
    </div>
  );
};

export default SharedLeftSideMenu;
