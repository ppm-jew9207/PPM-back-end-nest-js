import React, { useState } from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import './shared-top-right-bar.scss';

/* eslint-disable-next-line */
export interface SharedTopRightBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

const MenuButton = (props: any) => {
  const [state, setState] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setState(event.currentTarget);
  };

  const handleClose = () => {
    setState(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-owns={state ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
      >
        {props.children}
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={state}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(state)}
        onClose={handleClose}
      >
        {props.items.map((link: JSX.Element, index: number) => (
          <div key={index}>
            <MenuItem onClick={handleClose}>{link}</MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
};

export const SharedTopRightBar = (props: SharedTopRightBarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />

          <MenuButton
            items={['Notification 1', 'Notification 2', 'Notification 3']}
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </MenuButton>

          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>

          <MenuButton items={['Profile 1', 'Profile 2', 'Profile 3']}>
            <AccountCircle />
          </MenuButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SharedTopRightBar;
