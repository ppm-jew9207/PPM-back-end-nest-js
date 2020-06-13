import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import FormControl from '@material-ui/core/FormControl/FormControl';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './shared-login-component.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm } from 'react-hook-form';

/* eslint-disable-next-line */
export interface SharedLoginComponentProps {
  onLogin: (loginData: { username: string; password: string }) => void;
}

export const SharedLoginComponent = (props: SharedLoginComponentProps) => {
  const { register, handleSubmit } = useForm();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <AccountCircle style={{ fontSize: '7.1875rem' }} />
      <form autoComplete="off" onSubmit={handleSubmit(props.onLogin)}>
        <FormControl>
          <TextField
            id="username"
            placeholder="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            type="text"
            variant="outlined"
            ref={register}
          />
          <TextField
            id="password"
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            type="password"
            variant="outlined"
            ref={register}
          />
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="rememberMe"
              control={<Checkbox color="primary" />}
              label="Remember Me"
              labelPlacement="end"
              ref={register}
            />
            <Box py={2}>
              <a href="#forgotPassword">
                <i>Forgot Password?</i>
              </a>
            </Box>
          </FormGroup>
          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit">
              LOGIN
            </Button>
          </Grid>
        </FormControl>
      </form>
    </Grid>
  );
};

export default SharedLoginComponent;
