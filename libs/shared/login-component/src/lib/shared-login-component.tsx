import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { 
  Box, 
  Button, 
  Checkbox, 
  InputAdornment, 
  TextField, 
  FormControlLabel, 
  Grid
} from '@material-ui/core';

import './shared-login-component.scss';
import { useForm } from 'react-hook-form';

/* eslint-disable-next-line */
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
              placeholder="Email"
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

          <Box my={1}>
            <TextField
              id="password"
              placeholder="Password"
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

          <Box display="flex" justifyContent="space-between">
            <Box>
              <FormControlLabel
                value="rememberMe"
                control={<Checkbox color="primary" />}
                name="rememberMe"
                label="Remember Me"
                labelPlacement="end"
                inputRef={register()}
              />
            </Box>
            <Box py={0.5}>
              <Button onClick={props.onForgotPassword} color="primary">
                Forgot Password?
              </Button>
            </Box>
          </Box>
          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit" fullWidth>
              LOGIN
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default SharedLoginComponent;
