import React from 'react';

import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

/* eslint-disable-next-line */
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
    <AppBar>
      <Toolbar>
        {props.buttons.map((button) => (
          <Button href={button.path} onClick={() => button.onClick}>
            <Icon>{button.icon}</Icon>
            {button.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default SharedNavigation;
