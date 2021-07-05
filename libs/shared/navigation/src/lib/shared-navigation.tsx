import React from 'react';
import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Box } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

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
    <AppBar className="navigation-bar" elevation={2} position="sticky">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          {props.buttons.map((button) => (
            <Link
              key={button.path}
              href={button.path}
              onClick={() => button.onClick}
            >
              <Button className="navigation-button">
                <Icon>{button.icon}</Icon>
                <span className="navigation-button-label">{button.label}</span>
              </Button>
            </Link>
          ))}
        </Box>
        <Link href="/user">
          <Button>
            <AccountCircleRoundedIcon fontSize="large" />
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default SharedNavigation;
