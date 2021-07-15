import React, { SyntheticEvent, useState } from 'react';
import './shared-navigation.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

export interface SharedNavigationProps {
  buttons: {
    label: string;
    path: string;
    icon: string;
    onClick: (id: string) => void;
  }[];
  onSearch?: (id: string) => void;
}

export const SharedNavigation = (props: SharedNavigationProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const submitSearch = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(searchQuery);
  };

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
          {props.onSearch ? (
            <form noValidate onSubmit={submitSearch} className="search-form">
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
