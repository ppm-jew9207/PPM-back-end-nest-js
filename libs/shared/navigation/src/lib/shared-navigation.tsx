import React from 'react';
import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Box, Typography } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Hidden from '@material-ui/core/Hidden';
import { getToken } from '@ppm/data-access/local-storage';
export interface SharedNavigationProps {
  buttons: {
    label: string;
    path: string;
    icon: string;
    onClick: (id: string) => void;
  }[];
}

export const SharedNavigation = (props: SharedNavigationProps) => {
  const isLoggedIn = !!getToken();

  return (
    <AppBar className="navigation-bar" elevation={2} position="sticky">
      <Toolbar>
        <Typography className="logo">
          <a href="/">PPM</a>
        </Typography>
        <Box display="flex" flexGrow={1} ml={2}>
          {isLoggedIn === true && (
            <Hidden smDown>
              {props.buttons.map((button) => (
                <Link
                  underline="none"
                  key={button.path}
                  href={button.path}
                  onClick={() => button.onClick}
                >
                  <Button disableRipple className="navigation-button">
                    <Icon>{button.icon}</Icon>
                    <span className="navigation-button-label">
                      {button.label}
                    </span>
                  </Button>
                </Link>
              ))}
            </Hidden>
          )}
        </Box>
        {!isLoggedIn === true && (
          <>
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
          </>
        )}
        {isLoggedIn === true && (
          <Box className="user-profile">
            <Link href="/user">
              <Button disableRipple>
                <AccountCircleRoundedIcon fontSize="large" />
              </Button>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default SharedNavigation;
