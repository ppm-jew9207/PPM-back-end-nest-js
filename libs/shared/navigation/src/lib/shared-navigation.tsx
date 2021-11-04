import React, { SyntheticEvent, useState, useEffect } from 'react';
import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Box, Typography } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Hidden from '@material-ui/core/Hidden';
import { getToken } from '@ppm/data-access/local-storage';
import { userInfo } from 'os';
export interface SharedNavigationProps {
  buttons: {
    label: string;
    path: string;
    icon: string;
    onClick: (id: string) => void;
  }[];
  onSearch?: (id: string) => void;
  profile?: {
    photo?: string;
  };
}

export const SharedNavigation = (props: SharedNavigationProps) => {
  const isLoggedIn = !!getToken();
  const [searchQuery, setSearchQuery] = useState('');
  const submitSearch = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(searchQuery);
  };

  return (
    <AppBar className="navigation-bar" elevation={2} position="sticky">
      <Toolbar>
        <Typography className="logo">
          <RouterLink to="/">PPM</RouterLink>
        </Typography>
        <Box display="flex" flexGrow={1} ml={2}>
          {isLoggedIn && (
            <Hidden smDown>
              {props.buttons.map((button) => (
                <Link
                  className="menu-items"
                  component={RouterLink}
                  underline="none"
                  key={button.path}
                  to={button.path}
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
          {isLoggedIn && (
            <>
              {props.onSearch ? (
                <form
                  noValidate
                  onSubmit={submitSearch}
                  className="search-form"
                >
                  <InputBase
                    className="search-input"
                    name="search"
                    placeholder="Search courses"
                    inputProps={{ 'aria-label': 'Search' }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </form>
              ) : (
                ''
              )}
            </>
          )}
        </Box>
        {!isLoggedIn && (
          <>
            <Box mr={1}>
              <div className="log-in">
                <Link component={RouterLink} to="/login">
                  <Button>Log In</Button>
                </Link>
              </div>
            </Box>
            <Box mr={1}>
              <div className="sign-up">
                <Link component={RouterLink} to="/registry">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </Box>
          </>
        )}
        {isLoggedIn && (
          <Box className="user-profile">
            <Link component={RouterLink} to="/user">
              {props.profile?.photo ? (
                <img src={props.profile.photo} alt="profilePhoto" />
              ) : (
                <Button disableRipple>
                  <AccountCircleRoundedIcon fontSize="large" />
                </Button>
              )}
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default SharedNavigation;
