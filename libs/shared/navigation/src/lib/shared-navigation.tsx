import React from 'react';

import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export interface SharedNavigationProps {
  buttons: {
    label: string;
    path: string;
    icon: string;
    onClick: (id: string) => void;
  }[];
}

export const SharedNavigation = (props: SharedNavigationProps) => {
  return (
    <AppBar className="navigation-bar">
      <Toolbar>
        {props.buttons.map((button) => (
          <Link
            key={button.path}
            href={button.path}
            onClick={() => button.onClick}
          >
            <Button className="navigation-button">
              <Icon>{button.icon}</Icon>
             <span className='navigation-button-label'> {button.label} </span>
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default SharedNavigation;
