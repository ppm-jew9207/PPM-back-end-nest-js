import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {BrowserRouter as Link} from 'react-router-dom';
import { 
  Box, 
  Button, 
  Checkbox, 
  InputAdornment, 
  TextField, 
  FormControlLabel, 
  Grid
} from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

import './shared-login-component.scss';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  link: {
    textTransform: "none", 
    '&:hover': {
      backgroundColor: "transparent",
      textDecoration: "underline",
    }
  },
  button: {
    textTransform: "none"
  }
});

export interface SharedLoginComponentProps {
  onLogin: (loginData: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => void;
  onForgotPassword: () => void;
}

export const SharedLoginComponent = (props: SharedLoginComponentProps) => {
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();

  return (
    <div className="login-component">
      <Grid className="login-card" container direction="column" justify="center">
        <Box display="flex" alignItems="center" mx="auto">
          <AccountCircle style={{ fontSize: '7.1875rem' }} />
        </Box>
        <form autoComplete="off" onSubmit={handleSubmit(props.onLogin)}>
          <Box my={1}>
            <TextField 
              id="email"
              placeholder="Email*"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
              type="text"
              variant="outlined"
              inputRef={register({
                required: 'Required',
              })}
              error={!!errors.email}
              label={!errors.email ? '' : 'Error'}
              helperText={!errors.email ? '' : 'This field is required'}
            />
          </Box>

          <Box my={1} >
            <TextField
              id="password"
              placeholder="Password*"
              name="password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              variant="outlined"
              inputRef={register({
                required: 'Required',
              })}
              error={!!errors.email}
              label={!errors.password ? '' : 'Error'}
              helperText={!errors.password ? '' : 'This field is required'}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" py={1}>     
            <Box display="flex">
              <FormControlLabel
                value="rememberMe"
                control={<Checkbox color="primary" />}
                name="rememberMe"
                label="Remember Me"
                labelPlacement="end"
                inputRef={register()}
              />
            </Box>
            <Box>
              <Button disableTouchRipple disableFocusRipple  onClick={props.onForgotPassword} className={classes.link}>
                Forgot Password
              </Button>
            </Box>
          </Box>
          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit" fullWidth  className={classes.button}>
              Log In
            </Button>
          </Grid>
          <Box display="flex" justifyContent="center" py={1}>
            <Button href="/registry" disableTouchRipple disableFocusRipple className={classes.link}>
              Create Account
            </Button>
          </Box>
        </form>
      </Grid>
    </div>
  );
};

export default SharedLoginComponent;
