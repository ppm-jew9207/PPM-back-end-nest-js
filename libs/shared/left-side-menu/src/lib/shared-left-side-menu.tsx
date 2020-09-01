import React, { useState } from "react";

import LeftSideMenuList from './list/list';
import './shared-left-side-menu.scss';

import { Drawer, Typography, IconButton } from '@material-ui/core';
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons';

interface Type {
  name: string,
  path: string,
  icon: string
}

export interface SharedLeftSideMenuProps {
  title: string,
  menuItemsArray: Array<Type>
}

export const SharedLeftSideMenu = (props: SharedLeftSideMenuProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };


  return (
    <div>
      <div className='shared-left-side-menu-button'>
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
      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
      >
        <div className='shared-left-side-menu'>
          <IconButton
            onClick={() => toggleDrawer(false)}
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
          >
            {props.title}
          </Typography>
          <LeftSideMenuList menuItemsArray={props.menuItemsArray}/>
        </div>
      </Drawer>
    </div>
  );
};

export default SharedLeftSideMenu;