import React from "react";

import './shared-left-side-menu.scss';

import {
  SwipeableDrawer,
  List,
  ListItem,
  Typography,
  ListItemText
} from '@material-ui/core';

export interface LeftSideMenuProps {
  menuItemsArray: Array<Type>
}

interface Type {
  name: string;
  path?: string
}

export const LeftSideMenu = (props: LeftSideMenuProps) => {
  const [state, setState] = React.useState({
    menuOpen: true,
  });

  const menuItems = props.menuItemsArray;

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ menuOpen: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} href={item.path} className="list-item">
            <ListItemText primary={item.name} className="list-item-text"/>            
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={state.menuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
      <Typography 
        variant="h4" 
        component="h2" 
        align="center" 
        gutterBottom 
        className="title"
      >
        Settings
      </Typography>
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default LeftSideMenu;