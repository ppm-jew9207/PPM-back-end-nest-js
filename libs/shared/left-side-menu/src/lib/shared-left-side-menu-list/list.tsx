import React from 'react';

import './list.scss';

import { List, ListItem, ListItemIcon, Icon, ListItemText } from '@material-ui/core';

interface Type {
  name: string,
  path: string,
  icon: string
}

export interface LeftSideMenuProps {
  menuItemsArray: Array<Type>
}

export const LeftSideMenuList = (props: LeftSideMenuProps) => {
  return (
    <div role="presentation">
      <List>
        {props.menuItemsArray.map((item, index) => (
          <div className="list-item" key={index}>
            <ListItem
              component="a"
              button
              href={item.path}
            >
              <div className="list-item-inner">
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={item.name}/>
              </div>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default LeftSideMenuList;
