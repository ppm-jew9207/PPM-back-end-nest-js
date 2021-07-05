import React from 'react';
import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Box } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Hidden from '@material-ui/core/Hidden';
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
          <Hidden smDown>
            {props.buttons.map((button) => (
              <Link
                key={button.path}
                href={button.path}
                onClick={() => button.onClick}
              >
                <Button className="navigation-button">
                  <Icon>{button.icon}</Icon>
                  <span className="navigation-button-label">
                    {button.label}
                  </span>
                </Button>
              </Link>
            ))}
          </Hidden>
        </Box>
        <Box mr={1}>
          <div className="log-in">
            <Link href="/login">
              <Button>Log In</Button>
            </Link>
          </div>
        </Box>
        <Box mr={1}>
          <div className="sign-up">
            <Link href="/registry">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </Box>
        <Box mr={5}>
          <Link href="/user">
            <Button>
              <AccountCircleRoundedIcon fontSize="large" />
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SharedNavigation;
