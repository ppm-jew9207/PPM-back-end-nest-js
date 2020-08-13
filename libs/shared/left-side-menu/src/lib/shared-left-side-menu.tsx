import React, { useState, useEffect } from "react";

import './shared-left-side-menu.scss';

import {
  Drawer,
  List,
  ListItem,
  Typography,
  ListItemText,
  IconButton
} from '@material-ui/core';

import { 
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon
 } from '@material-ui/icons';

interface Type {
  name: string;
  path: string
}

export interface SharedLeftSideMenuProps {
  title: string,
  menuItemsArray: Array<Type>
}

export const SharedLeftSideMenu = (props: SharedLeftSideMenuProps) => {
  const [state, setState] = useState({
    menuOpen: false,
  })

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(props.menuItemsArray);
  }, [props]);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setState({ menuOpen: open });
  };

  const list = () => (
    <div
      role="presentation"
    >
      <List>
        {!!menuItems && menuItems.map((item, index) => (
        <ListItem
          component='a'
          button
          key={index}
          href={item.path}
          className="list-item"
        >
          <ChevronLeftIcon />
          <ListItemText
            primary={item.name}
            className="list-item-text"
          />
        </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        // edge="start"
        className='button'
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={state.menuOpen}
      >
        <IconButton 
          onClick={toggleDrawer(false)} 
          className='button'
          aria-label="close drawer"
          >
          <ChevronLeftIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          className="title"
        >
          {props.title}
        </Typography>
        {list()}
      </Drawer>
    </div>
  );
};

export default SharedLeftSideMenu;